import { TestBed, inject } from '@angular/core/testing';

import { ProyectoAsignarAsesorComponent } from './listar-proyecto-asignar-asesor.component';

describe('a listar-proyecto-asignar-asesor component', () => {
	let component: ProyectoAsignarAsesorComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProyectoAsignarAsesorComponent]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProyectoAsignarAsesorComponent], (ListarProyectoAsignarAsesorComponent) => {
		component = ListarProyectoAsignarAsesorComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});