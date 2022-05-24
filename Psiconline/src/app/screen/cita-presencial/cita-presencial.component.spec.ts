import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaPresencialComponent } from './cita-presencial.component';

describe('CitaPresencialComponent', () => {
  let component: CitaPresencialComponent;
  let fixture: ComponentFixture<CitaPresencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaPresencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaPresencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
