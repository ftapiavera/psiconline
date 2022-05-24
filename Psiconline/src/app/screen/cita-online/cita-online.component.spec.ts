import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaOnlineComponent } from './cita-online.component';

describe('CitaOnlineComponent', () => {
  let component: CitaOnlineComponent;
  let fixture: ComponentFixture<CitaOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
