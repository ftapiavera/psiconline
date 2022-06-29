"use strict";
const { Router } = require('express');
const router = Router();
const paciente = require('./models/paciente');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send("Bienvenido"));

//Registro de usuarios a la plataforma
router.post('/signup', async (req,res)=>{
    const {nombre,email,password} = req.body;
    const newPaciente = new paciente({nombre,email,password})
    await newPaciente.save();
    console.log(newPaciente)
    
    const token = jwt.sign({_id: newPaciente._id}, 'password')
    res.status(200).json({token})
})

//Inicio de sesion para usuarios
router.post('/login',async(req,res)=>{
    const { email , password } = req.body;
    const Paciente = await paciente.findOne({email});
    if (!Paciente) return res.status(401).send("No hay usuario registrado con este mail");
    if (Paciente.password !== password) return res.status(401).send("La constraseña no es correcta");
    
    const token = jwt.sign({_id: paciente}, 'password');
    return res.status(200).json({token});
})

async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('No autorizado');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('No autorizado');
		}

		const payload = await jwt.verify(token, 'password');
		if (!payload) {
			return res.status(401).send('No autorizado');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('No autorizado');
	}
}

module.exports = router;
