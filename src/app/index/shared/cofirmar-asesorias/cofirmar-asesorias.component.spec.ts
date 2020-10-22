import { TestBed, inject } from '@angular/core/testing';

import { CofirmarAsesoriasComponent } from './cofirmar-asesorias.component';

describe('a cofirmar-asesorias component', () => {
	let component: CofirmarAsesoriasComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CofirmarAsesoriasComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CofirmarAsesoriasComponent], (CofirmarAsesoriasComponent) => {
		component = CofirmarAsesoriasComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});