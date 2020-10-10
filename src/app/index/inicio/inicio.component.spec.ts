import { TestBed, inject } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';

describe('a inicio component', () => {
	let component: InicioComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				InicioComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([InicioComponent], (InicioComponent) => {
		component = InicioComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});