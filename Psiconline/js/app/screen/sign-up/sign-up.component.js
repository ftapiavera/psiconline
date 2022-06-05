"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let SignUpComponent = class SignUpComponent {
    constructor(FormB) {
        this.FormB = FormB;
        this.activeId = 5;
        this.formulario = this.FormB.group({
            nombre: ["", forms_1.Validators.required],
            apellido: ["", forms_1.Validators.required],
            email: ["", [forms_1.Validators.required, forms_1.Validators.email]],
            password: ["", [forms_1.Validators.required, forms_1.Validators.maxLength(8)]],
            passwordRepeat: ["", [forms_1.Validators.required, forms_1.Validators.maxLength(8)]]
        });
    }
    ngOnInit() {
    }
    validacion() {
        var _a, _b;
        console.log(this.formulario.value);
        if (((_a = this.formulario.get("password")) === null || _a === void 0 ? void 0 : _a.value) != ((_b = this.formulario.get("passwordRepeat")) === null || _b === void 0 ? void 0 : _b.value)) {
            alert("Las contraseñas no son iguales");
            document.body.innerHTML = ("ingresa contraseñas iguales");
        }
    }
};
SignUpComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.sass']
    })
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map