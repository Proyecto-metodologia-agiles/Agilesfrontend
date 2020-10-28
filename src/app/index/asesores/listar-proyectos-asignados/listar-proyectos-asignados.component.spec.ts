import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProyectosAsignadosComponent } from './listar-proyectos-asignados.component';

describe('ListarProyectosAsignadosComponent', () => {
  let component: ListarProyectosAsignadosComponent;
  let fixture: ComponentFixture<ListarProyectosAsignadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProyectosAsignadosComponent ]
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
