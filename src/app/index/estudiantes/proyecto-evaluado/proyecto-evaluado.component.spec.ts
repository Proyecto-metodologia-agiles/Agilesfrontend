import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';

import { ProyectoEvaluadoComponent } from './proyecto-evaluado.component';

describe('ProyectoEvaluadoComponent', () => {
  let component: ProyectoEvaluadoComponent;
  let fixture: ComponentFixture<ProyectoEvaluadoComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      declarations: [ProyectoEvaluadoComponent]
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
    //   expect(component.usuariosCreados).toBeDefined([]);
    //   expect(component.usuario).toBeDefined(Usuarios);
    //   expect(component.form).toBeDefined(NgForm);
  });
});
