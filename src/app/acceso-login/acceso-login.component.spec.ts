import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Login } from 'src/models/login';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { casosDePruebaLogin } from 'src/models/login.test';
import { LoginService } from 'src/services/login.service';
import { AccesoLoginComponent } from './acceso-login.component';

describe('AccesoLoginComponent', () => {
  let component: AccesoLoginComponent;
  let fixture: ComponentFixture<AccesoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ AccesoLoginComponent ],
      imports: [HttpClientModule, FormsModule,FormsModule,ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule,
        CommonModule],
      providers: [ LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('crear sesion', () => {
    const service: LoginService = TestBed.get(LoginService)
    spyOn(service, 'onCreadaSesion');
    casosDePruebaLogin.forEach(caso => {
      component.AccesoLogin = caso;
      component.onSubmit();
      expect(service.onCreadaSesion).toHaveBeenCalled();
    });
    
  });
});
