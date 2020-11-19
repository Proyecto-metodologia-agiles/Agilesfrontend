import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoEvaluadoComponent } from './proyecto-evaluado.component';

describe('ProyectoEvaluadoComponent', () => {
  let component: ProyectoEvaluadoComponent;
  let fixture: ComponentFixture<ProyectoEvaluadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoEvaluadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoEvaluadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
