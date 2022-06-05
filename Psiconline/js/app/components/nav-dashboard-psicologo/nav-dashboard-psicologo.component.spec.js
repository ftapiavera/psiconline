"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const nav_dashboard_psicologo_component_1 = require("./nav-dashboard-psicologo.component");
describe('NavDashboardPsicologoComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [nav_dashboard_psicologo_component_1.NavDashboardPsicologoComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(nav_dashboard_psicologo_component_1.NavDashboardPsicologoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nav-dashboard-psicologo.component.spec.js.map