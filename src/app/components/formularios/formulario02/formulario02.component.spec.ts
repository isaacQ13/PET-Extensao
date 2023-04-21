import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario02Component } from './formulario02.component';

describe('Formulario02Component', () => {
  let component: Formulario02Component;
  let fixture: ComponentFixture<Formulario02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulario02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
