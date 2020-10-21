import { TestBed, inject } from '@angular/core/testing';

import { ConfirmarAsesorMetodologicoComponent } from './confirmar-asesor-metodologico.component';

describe('a confirmar-asesor-metodologico component', () => {
	let component: ConfirmarAsesorMetodologicoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ConfirmarAsesorMetodologicoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ConfirmarAsesorMetodologicoComponent], (ConfirmarAsesorMetodologicoComponent) => {
		component = ConfirmarAsesorMetodologicoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});