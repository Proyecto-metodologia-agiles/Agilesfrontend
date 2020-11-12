import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';

import { ValorarAnteproyectoComponent } from './valorar-anteproyecto.component';


describe('ValorarAnteproyectoComponent2', () => {
  let component: ValorarAnteproyectoComponent;
  let fixture: ComponentFixture<ValorarAnteproyectoComponent>;

  beforeEach(async(() => {

    const mockDialogRef = {
      close: jasmine.createSpy('close')
    };

    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ValorarAnteproyectoComponent],
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        MatDialogModule
      ],
      providers: [ServiceAnteproyectoService,
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }, {
          provide: MAT_DIALOG_DATA,
          useValue: {
            id: '1'
          } // Add any data you wish to test if it is passed/used correctly
        }
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorarAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // expect(component.usuariosCreados).toBeDefined([]);
    // expect(component.usuario).toBeDefined(Usuarios);
    // expect(component.form).toBeDefined(NgForm);
  });


});
