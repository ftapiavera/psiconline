import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPsicoComponent } from './list-psico.component';

describe('ListPsicoComponent', () => {
  let component: ListPsicoComponent;
  let fixture: ComponentFixture<ListPsicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPsicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPsicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
