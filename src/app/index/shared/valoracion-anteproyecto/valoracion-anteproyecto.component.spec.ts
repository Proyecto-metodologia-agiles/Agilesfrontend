import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionAnteproyectoComponent } from './valoracion-anteproyecto.component';

describe('ValoracionAnteproyectoComponent', () => {
  let component: ValoracionAnteproyectoComponent;
  let fixture: ComponentFixture<ValoracionAnteproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionAnteproyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
