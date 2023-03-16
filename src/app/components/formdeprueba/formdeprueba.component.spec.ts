import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdepruebaComponent } from './formdeprueba.component';

describe('FormdepruebaComponent', () => {
  let component: FormdepruebaComponent;
  let fixture: ComponentFixture<FormdepruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdepruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdepruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
