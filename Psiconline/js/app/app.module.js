"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const navbar_component_1 = require("./components/navbar/navbar.component");
const home_screen_component_component_1 = require("./screen/home-screen-component/home-screen-component.component");
const footer_component_1 = require("./components/footer/footer.component");
const cita_online_component_1 = require("./screen/cita-online/cita-online.component");
const cita_presencial_component_1 = require("./screen/cita-presencial/cita-presencial.component");
const about_me_component_1 = require("./screen/about-me/about-me.component");
const blog_component_1 = require("./screen/blog/blog.component");
const sign_up_component_1 = require("./screen/sign-up/sign-up.component");
const login_component_1 = require("./screen/login/login.component");
const search_component_1 = require("./components/search/search.component");
const resultado_busqueda_component_1 = require("./screen/resultado-busqueda/resultado-busqueda.component");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const dato_demo_service_1 = require("./dato-demo.service");
const nav_dashboard_psicologo_component_1 = require("./components/nav-dashboard-psicologo/nav-dashboard-psicologo.component");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            home_screen_component_component_1.HomeScreenComponentComponent,
            footer_component_1.FooterComponent,
            cita_online_component_1.CitaOnlineComponent,
            cita_presencial_component_1.CitaPresencialComponent,
            about_me_component_1.AboutMeComponent,
            blog_component_1.BlogComponent,
            sign_up_component_1.SignUpComponent,
            login_component_1.LoginComponent,
            search_component_1.SearchComponent,
            resultado_busqueda_component_1.ResultadoBusquedaComponent,
            nav_dashboard_psicologo_component_1.NavDashboardPsicologoComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.ReactiveFormsModule,
            ng_bootstrap_1.NgbModule
        ],
        providers: [dato_demo_service_1.DatoDemoService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map