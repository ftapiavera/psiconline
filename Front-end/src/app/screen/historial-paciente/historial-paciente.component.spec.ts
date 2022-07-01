import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialPacienteComponent} from './historial-paciente.component';


describe('DashboardAdminComponent', () => {
  let component: HistorialPacienteComponent;
  let fixture: ComponentFixture<HistorialPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
