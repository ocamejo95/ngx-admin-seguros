import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indicador2Component } from './indicador2.component';

describe('Indicador2Component', () => {
  let component: Indicador2Component;
  let fixture: ComponentFixture<Indicador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Indicador2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Indicador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
