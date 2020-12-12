import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';

import { EvaluarAnteproyectoComponent } from './evaluar-anteproyecto.component';

describe('EvaluarAnteproyectoComponent', () => {
  let component: EvaluarAnteproyectoComponent;
  let fixture: ComponentFixture<EvaluarAnteproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule,
        HttpClientModule],
      declarations: [EvaluarAnteproyectoComponent],
      providers: [ServiceAnteproyectoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
