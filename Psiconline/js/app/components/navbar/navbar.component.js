"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.activeId = 1;
    }
    ngOnInit() {
    }
};
NavbarComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.sass']
    })
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map