import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajePacienteComponent } from './mensaje-paciente.component';

describe('MensajePacienteComponent', () => {
  let component: MensajePacienteComponent;
  let fixture: ComponentFixture<MensajePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajePacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
