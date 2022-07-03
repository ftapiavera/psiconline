import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPsicoComponent } from './password-psico.component';

describe('PasswordPsicoComponent', () => {
  let component: PasswordPsicoComponent;
  let fixture: ComponentFixture<PasswordPsicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordPsicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordPsicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
