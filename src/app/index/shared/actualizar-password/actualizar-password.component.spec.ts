import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from 'src/services/login.service';
import { ActualizarPasswordComponent } from './actualizar-password.component';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActualizarPasswordComponent', () => {
  let component: ActualizarPasswordComponent;
  let fixture: ComponentFixture<ActualizarPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ FormsModule,
      BrowserAnimationsModule,
      AngularMaterialModule,
      HttpClientTestingModule ],
      declarations: [ ActualizarPasswordComponent ],
      providers: [LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
