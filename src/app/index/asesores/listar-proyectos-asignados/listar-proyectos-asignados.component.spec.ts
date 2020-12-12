import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';

import { ListarProyectosAsignadosComponent } from './listar-proyectos-asignados.component';

describe('ListarProyectosAsignadosComponent', () => {
  let component: ListarProyectosAsignadosComponent;
  let fixture: ComponentFixture<ListarProyectosAsignadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule,
        HttpClientModule],
      declarations: [ListarProyectosAsignadosComponent],
      providers: [ServiceAnteproyectoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProyectosAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
