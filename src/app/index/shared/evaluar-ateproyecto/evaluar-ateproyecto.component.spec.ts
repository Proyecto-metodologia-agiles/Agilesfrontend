import { TestBed, inject } from '@angular/core/testing';

import { EvaluarAteproyectoComponent } from './evaluar-ateproyecto.component';

describe('a evaluar-ateproyecto component', () => {
	let component: EvaluarAteproyectoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				EvaluarAteproyectoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EvaluarAteproyectoComponent], (EvaluarAteproyectoComponent) => {
		component = EvaluarAteproyectoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});