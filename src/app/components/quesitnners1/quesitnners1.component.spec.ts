import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quesitnners1Component } from './quesitnners1.component';

describe('Quesitnners1Component', () => {
  let component: Quesitnners1Component;
  let fixture: ComponentFixture<Quesitnners1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quesitnners1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quesitnners1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
