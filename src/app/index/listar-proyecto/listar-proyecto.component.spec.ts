import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';

import { ListarProyectoComponent } from './listar-proyecto.component';

describe('ListarProyectoComponent', () => {
  let component: ListarProyectoComponent;
  let fixture: ComponentFixture<ListarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        AngularMaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        MatDialogModule
      ],
      declarations: [ListarProyectoComponent],
      providers: [
        ServiceAnteproyectoService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
