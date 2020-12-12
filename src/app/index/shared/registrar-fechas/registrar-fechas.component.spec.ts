import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { FormBuilder,  ReactiveFormsModule } from '@angular/forms';
import { MiembroComiteService } from 'src/services/comite.service';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { RegistrarFechasComponent } from './registrar-fechas.component';

describe('RegistrarFechasComponent', () => {
  let component: RegistrarFechasComponent;
  let fixture: ComponentFixture<RegistrarFechasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule,
      BrowserAnimationsModule,
      FormsModule,
      CommonModule,
      HttpClientModule,
      MatDialogModule,
      ReactiveFormsModule],
      declarations: [ RegistrarFechasComponent ],
      providers: [FormBuilder,MiembroComiteService,MatDatepickerModule]

      /*providers: [MiembroComiteService,
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }, {
          provide: MAT_DIALOG_DATA,
          useValue: {
            id: '1'
          } // Add any data you wish to test if it is passed/used correctly
        }
      ]*/
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
