import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ActualizarDocumentoComponent } from './actualizar-documento.component';

describe('ActualizarDocumentoComponent', () => {
  let component: ActualizarDocumentoComponent;
  let fixture: ComponentFixture<ActualizarDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
      BrowserAnimationsModule,
      AngularMaterialModule,
      HttpClientTestingModule],
      declarations: [ ActualizarDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
