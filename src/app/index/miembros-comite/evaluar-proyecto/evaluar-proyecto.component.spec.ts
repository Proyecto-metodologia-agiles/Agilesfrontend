import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarProyectoComponent } from './evaluar-proyecto.component';

describe('EvaluarProyectoComponent', () => {
  let component: EvaluarProyectoComponent;
  let fixture: ComponentFixture<EvaluarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
