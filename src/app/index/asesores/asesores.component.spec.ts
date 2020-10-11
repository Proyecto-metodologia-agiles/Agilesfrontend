import { TestBed, inject } from '@angular/core/testing';

import { AsesoresComponent } from './asesores.component';

describe('a asesores component', () => {
	let component: AsesoresComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AsesoresComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AsesoresComponent], (AsesoresComponent) => {
		component = AsesoresComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});