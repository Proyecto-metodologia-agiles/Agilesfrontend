import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject, ComponentFixture, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { ServiceEstudianteService } from 'src/services/estudiante.service';

import { ListarEstudiantesComponent } from './listar-estudiantes.component';

describe('a listar-estudiantes component', () => {
	let component: ListarEstudiantesComponent;
	let fixture: ComponentFixture<ListarEstudiantesComponent>;
	const mockDialogRef = {
		close: jasmine.createSpy('close')
	};
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			imports: [
				AngularMaterialModule,
				HttpClientTestingModule,
				BrowserAnimationsModule,
				FormsModule,
				CommonModule,
				MatDialogModule
			],
			declarations: [ListarEstudiantesComponent],
			providers: [
				ServiceEstudianteService
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListarEstudiantesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
