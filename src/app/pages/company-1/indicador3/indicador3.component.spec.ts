import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indicador3Component } from './indicador3.component';

describe('Indicador3Component', () => {
  let component: Indicador3Component;
  let fixture: ComponentFixture<Indicador3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Indicador3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Indicador3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
