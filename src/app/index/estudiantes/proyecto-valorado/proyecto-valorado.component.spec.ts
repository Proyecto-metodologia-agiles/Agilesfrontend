import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';
import { LoginService } from 'src/services/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { ProyectoValoradoComponent } from './proyecto-valorado.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProyectoValoradoComponent', () => {
  let component: ProyectoValoradoComponent;
  let fixture: ComponentFixture<ProyectoValoradoComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule
      ],
      declarations: [ ProyectoValoradoComponent ],
      providers: [LoginService,ServiceAnteproyectoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoValoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
