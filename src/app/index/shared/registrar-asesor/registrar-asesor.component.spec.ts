import { TestBed, inject } from '@angular/core/testing';

import { RegistrarAsesorComponent } from './registrar-asesor.component';

describe('a registrar-asesor component', () => {
	let component: RegistrarAsesorComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RegistrarAsesorComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RegistrarAsesorComponent], (RegistrarAsesorComponent) => {
		component = RegistrarAsesorComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});