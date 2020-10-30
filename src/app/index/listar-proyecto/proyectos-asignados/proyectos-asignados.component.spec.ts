import { TestBed, inject } from '@angular/core/testing';

import { ProyectosAsignadosComponent } from './proyectos-asignados.component';

describe('a proyectos-asignados component', () => {
	let component: ProyectosAsignadosComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProyectosAsignadosComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProyectosAsignadosComponent], (ProyectosAsignadosComponent) => {
		component = ProyectosAsignadosComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});