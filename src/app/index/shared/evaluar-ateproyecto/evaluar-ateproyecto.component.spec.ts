
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject, ComponentFixture, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { ServiceAsesorService } from 'src/services/asesor.service';

import { EvaluarAteproyectoComponent } from './evaluar-ateproyecto.component';

describe('EvaluarAteproyectoComponent', () => {
	let component: EvaluarAteproyectoComponent;
	let fixture: ComponentFixture<EvaluarAteproyectoComponent>;
	const mockDialogRef = {
		close: jasmine.createSpy('close')
	};
	beforeEach(async(() => {

		TestBed.configureTestingModule({
			imports: [FormsModule, HttpClientModule],
			declarations: [EvaluarAteproyectoComponent],
			providers: [ServiceAsesorService,
				{
					provide: MatDialogRef,
					useValue: mockDialogRef
				}, {
					provide: MAT_DIALOG_DATA,
					useValue: {
						//id: '1'
					} // Add any data you wish to test if it is passed/used correctly
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EvaluarAteproyectoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
		//   expect(component.usuariosCreados).toBeDefined([]);
		//   expect(component.usuario).toBeDefined(Usuarios);
		//   expect(component.form).toBeDefined(NgForm);
	});
});