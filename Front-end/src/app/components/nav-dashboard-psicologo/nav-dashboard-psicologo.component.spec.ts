import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDashboardPsicologoComponent } from './nav-dashboard-psicologo.component';

describe('NavDashboardPsicologoComponent', () => {
  let component: NavDashboardPsicologoComponent;
  let fixture: ComponentFixture<NavDashboardPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDashboardPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDashboardPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
