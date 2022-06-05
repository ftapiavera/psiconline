"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitaOnlineComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let CitaOnlineComponent = class CitaOnlineComponent {
    constructor() {
        this.tratamientos = [];
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
    }
    ngOnInit() {
    }
};
CitaOnlineComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'app-cita-online',
        templateUrl: './cita-online.component.html',
        styleUrls: ['./cita-online.component.sass']
    })
], CitaOnlineComponent);
exports.CitaOnlineComponent = CitaOnlineComponent;
//# sourceMappingURL=cita-online.component.js.map