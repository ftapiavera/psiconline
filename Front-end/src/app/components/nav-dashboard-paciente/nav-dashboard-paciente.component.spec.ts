import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDashboardPacienteComponent } from './nav-dashboard-paciente.component';

describe('NavDashboardPacienteComponent', () => {
  let component: NavDashboardPacienteComponent;
  let fixture: ComponentFixture<NavDashboardPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDashboardPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDashboardPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
