import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCamaraComponent } from './open-camara.component';

describe('OpenCamaraComponent', () => {
  let component: OpenCamaraComponent;
  let fixture: ComponentFixture<OpenCamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenCamaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
