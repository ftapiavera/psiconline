"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const home_screen_component_component_1 = require("./screen/home-screen-component/home-screen-component.component");
const cita_online_component_1 = require("./screen/cita-online/cita-online.component");
const cita_presencial_component_1 = require("./screen/cita-presencial/cita-presencial.component");
const about_me_component_1 = require("./screen/about-me/about-me.component");
const blog_component_1 = require("./screen/blog/blog.component");
const login_component_1 = require("./screen/login/login.component");
const sign_up_component_1 = require("./screen/sign-up/sign-up.component");
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_screen_component_component_1.HomeScreenComponentComponent },
    { path: 'citaOnline', component: cita_online_component_1.CitaOnlineComponent },
    { path: 'citaPresencial', component: cita_presencial_component_1.CitaPresencialComponent },
    { path: 'aboutMe', component: about_me_component_1.AboutMeComponent },
    { path: 'blog', component: blog_component_1.BlogComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signUp', component: sign_up_component_1.SignUpComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map