import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';

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
        MatDialogModule
      ],
      declarations: [RegistrarProyectoComponent],
      providers: [
        ServiceAnteproyectoService
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