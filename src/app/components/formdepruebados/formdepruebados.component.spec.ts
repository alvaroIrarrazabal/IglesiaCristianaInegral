import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdepruebadosComponent } from './formdepruebados.component';

describe('FormdepruebadosComponent', () => {
  let component: FormdepruebadosComponent;
  let fixture: ComponentFixture<FormdepruebadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdepruebadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdepruebadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
