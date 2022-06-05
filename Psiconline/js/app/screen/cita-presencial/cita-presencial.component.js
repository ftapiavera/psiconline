"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitaPresencialComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let CitaPresencialComponent = class CitaPresencialComponent {
    constructor() {
        this.tratamientos = [];
        this.ciudades = [];
        this.tratamientos = [
            { nombre: "ansiedad", id: 1 },
            { nombre: "depresion", id: 2 },
            { nombre: "psicologia intantil", id: 4 },
            { nombre: "autoestima", id: 5 },
            { nombre: "terapia de pareja", id: 6 },
            { nombre: "terapia familiar", id: 7 },
            { nombre: "terapia cognitivo conductual", id: 8 },
            { nombre: "bulimia", id: 9 },
            { nombre: "anorexia", id: 10 },
            { nombre: "drogadiccion", id: 11 }
        ];
        this.ciudades = [
            { nombre: "Viña del Mar", id: 1 },
            { nombre: "Valparaiso", id: 2 },
            { nombre: "Con Con", id: 3 },
            { nombre: "Quilpue", id: 4 },
            { nombre: "Villa Alemana", id: 5 },
            { nombre: "Reñaca", id: 6 },
            { nombre: "Santiago", id: 7 },
            { nombre: "Providencia", id: 8 },
            { nombre: "Vitacura", id: 9 },
            { nombre: "Maipu", id: 10 },
            { nombre: "Independencia", id: 11 },
            { nombre: "Las Condes", id: 12 },
            { nombre: "Quilicura", id: 13 }
        ];
    }
    ngOnInit() {
    }
};
CitaPresencialComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'app-cita-presencial',
        templateUrl: './cita-presencial.component.html',
        styleUrls: ['./cita-presencial.component.sass']
    })
], CitaPresencialComponent);
exports.CitaPresencialComponent = CitaPresencialComponent;
//# sourceMappingURL=cita-presencial.component.js.map