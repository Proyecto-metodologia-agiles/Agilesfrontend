import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { ProyectoValoradoComponent } from './proyecto-valorado.component';

describe('ProyectoValoradoComponent', () => {
  let component: ProyectoValoradoComponent;
  let fixture: ComponentFixture<ProyectoValoradoComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      declarations: [ ProyectoValoradoComponent ]
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
