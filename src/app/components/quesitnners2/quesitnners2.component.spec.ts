import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quesitnners2Component } from './quesitnners2.component';

describe('Quesitnners2Component', () => {
  let component: Quesitnners2Component;
  let fixture: ComponentFixture<Quesitnners2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quesitnners2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quesitnners2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
