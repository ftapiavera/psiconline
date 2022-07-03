import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAdminComponent } from './password-admin.component';

describe('PasswordAdminComponent', () => {
  let component: PasswordAdminComponent;
  let fixture: ComponentFixture<PasswordAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
