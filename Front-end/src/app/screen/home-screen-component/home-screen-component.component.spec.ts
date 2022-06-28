import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenComponentComponent } from './home-screen-component.component';

describe('HomeScreenComponentComponent', () => {
  let component: HomeScreenComponentComponent;
  let fixture: ComponentFixture<HomeScreenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeScreenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
