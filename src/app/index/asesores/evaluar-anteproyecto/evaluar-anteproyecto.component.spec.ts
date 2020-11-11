import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarAnteproyectoComponent } from './evaluar-anteproyecto.component';

describe('EvaluarAnteproyectoComponent', () => {
  let component: EvaluarAnteproyectoComponent;
  let fixture: ComponentFixture<EvaluarAnteproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluarAnteproyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
