import { TestBed, inject } from '@angular/core/testing';

import { GestionComiteComponent } from './Gestion-Comite.component';

describe('a Gestion-Comite component', () => {
	let component: GestionComiteComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				GestionComiteComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([GestionComiteComponent], (GestionComiteComponent) => {
		component = GestionComiteComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});