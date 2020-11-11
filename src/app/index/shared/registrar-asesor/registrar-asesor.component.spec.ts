import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { asesores } from 'src/models/asesores';
import { ServiceAsesorService } from 'src/services/asesor.service';
import { ServiceAsesoriasService } from 'src/services/asesorias.service';

import { RegistrarAsesorComponent } from './registrar-asesor.component';

describe('a registrar-asesor component', () => {
	let component: RegistrarAsesorComponent;
	//let HttpMock: HttpTestingController;

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

	/*it('should return an asesores',()=>{
		const service: ServiceAsesorService = TestBed.get(ServiceAsesoriasService)
		const dummyAsesor= {Name_Complet: 'Alberto Perez',
			Email: 'albertoperez@gmail.com',
			Identification: '1065765453',
			Phone: '3107094260',
			Type_Asser: 'Metodologico',
			Password: 'hGHft567fgF6Tgh',
			Direction: 'calle 5'};
		service.getAsesores().subscribe(asesores=>{
			expect(asesores).toEqual(dummyAsesor);
		});

		const req = HttpMock
	});*/
	
});