import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesMedicoComponent } from './pacientes-medico.component';

describe('PacientesMedicoComponent', () => {
  let component: PacientesMedicoComponent;
  let fixture: ComponentFixture<PacientesMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
