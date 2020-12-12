import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject, ComponentFixture, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { ServiceAsesorService } from 'src/services/asesor.service';
import { ServiceAsesoriasService } from 'src/services/asesorias.service';

import { CofirmarAsesoriasComponent } from './cofirmar-asesorias.component';

describe('a cofirmar-asesorias-component-error', () => {
	let component: CofirmarAsesoriasComponent;
	let fixture: ComponentFixture<CofirmarAsesoriasComponent>;
	const mockDialogRef = {
		close: jasmine.createSpy('close')
	};
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			declarations: [CofirmarAsesoriasComponent],
			imports: [
				AngularMaterialModule,
				BrowserAnimationsModule,
				FormsModule,
				CommonModule,
				HttpClientTestingModule
			],
			providers: [ServiceAsesorService, ServiceAsesoriasService,
				{
					provide: MatDialogRef,
					useValue: mockDialogRef
				}, {
					provide: MAT_DIALOG_DATA,
					useValue: {
						cut: "1",
						date: "2020-10-24T00:00:00",
						focus: "Cualitativo",
						id: "1",
						line: "Psicología y las Organizaciones",
						metodologic_Advisor: {},
						state: "1",
						student_1: {},
						student_2: {},
						thematic_Advisor: {},
						title: "prueba proyecto",
						url_Archive: "localhost:5001/Archivos/6373"
					} // Add any data you wish to test if it is passed/used correctly
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CofirmarAsesoriasComponent);
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