import { TestBed, inject } from '@angular/core/testing';

import { ListarEstudiantesComponent } from './listar-estudiantes.component';

describe('a listar-estudiantes component', () => {
	let component: ListarEstudiantesComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ListarEstudiantesComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ListarEstudiantesComponent], (ListarEstudiantesComponent) => {
		component = ListarEstudiantesComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});