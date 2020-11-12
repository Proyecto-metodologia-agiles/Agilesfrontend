import { TestBed, inject, ComponentFixture, async } from '@angular/core/testing';

import { ProyectosAsignadosComponent } from './proyectos-asignados.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


describe('a proyectos-asignados component', () => {
	let component: ProyectosAsignadosComponent;
	let fixture: ComponentFixture<ProyectosAsignadosComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			imports: [
				AngularMaterialModule,
				BrowserAnimationsModule,
				FormsModule,
				CommonModule,
				MatDialogModule
			],
			declarations: [ProyectosAsignadosComponent]

		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProyectosAsignadosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});


describe('a proyectos-asignados component', () => {
	let component: ProyectosAsignadosComponent;
	let fixture: ComponentFixture<ProyectosAsignadosComponent>;
	const mockDialogRef = {
		close: jasmine.createSpy('close')
	};
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			imports: [
				AngularMaterialModule,
				BrowserAnimationsModule,
				FormsModule,
				CommonModule,
				MatDialogModule
			],
			declarations: [ProyectosAsignadosComponent],
			providers: [

			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProyectosAsignadosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});