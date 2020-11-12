import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { RegistrarComiteComponent } from './registrar-comite.component';

describe('a registrar-comite component', () => {
	let component: RegistrarComiteComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				RegistrarComiteComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RegistrarComiteComponent], (RegistrarComiteComponent) => {
		component = RegistrarComiteComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});