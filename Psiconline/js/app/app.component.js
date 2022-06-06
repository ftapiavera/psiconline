"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor(service) {
        this.service = service;
        this.title = 'Psiconline';
        this.profesionales = {};
    }
    ngOnInit() {
    }
};
AppComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.sass']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map