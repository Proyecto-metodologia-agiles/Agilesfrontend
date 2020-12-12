import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginService } from 'src/services/login.service';

import { MenuEstudianteComponent } from './menu-estudiante.component';

describe('MenuEstudianteComponent', () => {
  let component: MenuEstudianteComponent;
  let fixture: ComponentFixture<MenuEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatDialogModule,
        CommonModule],
      declarations: [MenuEstudianteComponent],
      providers: [LoginService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
