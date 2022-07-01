import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMedicoComponent } from './dash-medico.component';

describe('DashMedicoComponent', () => {
  let component: DashMedicoComponent;
  let fixture: ComponentFixture<DashMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
