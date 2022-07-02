"use strict";
require('dotenv').config();
const { Router } = require('express');
const router = Router();
const paciente = require('./models/paciente');
const administrador = require('./models/administrador');
const psicologo = require('./models/psicologo');
const cita = require('./models/cita');
const horario = require('./models/horario');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

router.get('/', (req, res) => res.send("Bienvenido"));

//Obtener todos los pacientes GET
router.get('/pacientes', async(req,res)=>{
	const pacientesAll = await paciente.find({});
	res.json(pacientesAll);
})

//Obtener todos los psicologos GET
router.get('/psicologos', async(req,res)=>{
	const psicologosAll = await psicologo.find({});
	ngres.json({psicologosAll});
})

//Obtener todos los administradores GET
router.get('/administradores', async(req,res)=>{
	const adminAll = await administrador.find({});
	res.json(adminAll);
})

//Registro de usuarios a la plataforma POST
router.post('/signup', async (req,res)=>{
    const {nombre,email,password} = req.body;
    const newPaciente = new paciente({nombre,email,password})
    await newPaciente.save();
    console.log(newPaciente)
    
    const token = jwt.sign({_id: newPaciente._id}, process.env.DB_PASSWORD)
    res.status(200).json({token})
})

//Inicio de sesion para usuarios
router.post('/login',async(req,res)=>{
    const { email , password } = req.body;
    const Paciente = await paciente.findOne({email});
    if (!Paciente) return res.status(401).send("No hay usuario registrado con este mail");
    if (Paciente.password !== password) return res.status(401).send("La constraseña no es correcta");
    
    const token = jwt.sign({_id: paciente}, process.env.DB_PASSWORD);
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

		const payload = await jwt.verify(token, process.env.DB_PASSWORD);
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

//Registro de administrador POST
router.post('/signAdmin', async (req,res)=>{
    const {usuario,password} = req.body;
    const newAdministrador = new administrador({usuario,password})
    await newAdministrador.save();
    console.log(newAdministrador)
    
    const token = jwt.sign({_id: newAdministrador._id}, process.env.DB_PASSWORD)
    res.status(200).json({token})
})

//Inicio de sesion para Administrador POST
router.post('/admin',async(req,res)=>{
    const {usuario, password } = req.body;
    const Admin = await administrador.findOne({usuario});
    if (!Admin) return res.status(401).send("El usuario administrador ingresado es incorrecto");
    if (Admin.password !== password) return res.status(401).send("La constraseña no es correcta");
    
    const token = jwt.sign({_id: administrador}, process.env.DB_PASSWORD);
    return res.status(200).json({token});
})

//Registro de psicologo POST
router.post('/signpsicologo', async (req,res)=>{
    const {nombre,rut,mail,password} = req.body;
    const newPsicologo = new psicologo({nombre,rut,mail,password})
    await newPsicologo.save();
    console.log(newPsicologo)
    
    const token = jwt.sign({_id: newPsicologo._id}, process.env.DB_PASSWORD)
    res.status(200).json({token})
})

//Inicio de sesion para psicologo POST
router.post('/loginpsicologo',async(req,res)=>{
    const {mail, password } = req.body;
    const Psicologo = await psicologo.findOne({mail});
    if (!Psicologo) return res.status(401).send("El usuario administrador ingresado es incorrecto");
    if (Psicologo.password !== password) return res.status(401).send("La constraseña no es correcta");
    
    const token = jwt.sign({_id: psicologo}, process.env.DB_PASSWORD);
    return res.status(200).json({token});
})
module.exports = router;
