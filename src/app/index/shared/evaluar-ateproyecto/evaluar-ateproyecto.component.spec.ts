
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject, ComponentFixture, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';

import { EvaluarAteproyectoComponent } from './evaluar-ateproyecto.component';

describe('EvaluarAteproyectoComponent', () => {
	let component: EvaluarAteproyectoComponent;
	let fixture: ComponentFixture<EvaluarAteproyectoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule],
			declarations: [EvaluarAteproyectoComponent]
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