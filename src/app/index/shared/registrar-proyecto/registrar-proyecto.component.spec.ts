import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';
import { ServiceAsesorService } from 'src/services/asesor.service';
import { ServiceEstudianteService } from 'src/services/estudiante.service';

import { RegistrarProyectoComponent } from './registrar-proyecto.component';

describe('RegistrarProyectoComponent', () => {
  let component: RegistrarProyectoComponent;
  let fixture: ComponentFixture<RegistrarProyectoComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        AngularMaterialModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        HttpClientTestingModule,
        MatDialogModule,
        ReactiveFormsModule
      ],
      declarations: [RegistrarProyectoComponent],
      providers: [
        ServiceAnteproyectoService, ServiceEstudianteService, ServiceAsesorService,
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            data: "100001233",
          } // Add any data you wish to test if it is passed/used correctly
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});