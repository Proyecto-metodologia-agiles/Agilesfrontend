import { Component, OnInit } from '@angular/core';
import { asesores } from 'src/models/asesores';
import { ServiceAsesorService } from 'src/services/asesor.service';

@Component({
	selector: 'app-registrar-asesor',
	templateUrl: './registrar-asesor.component.html',
	styleUrls: ['./registrar-asesor.component.css']
})

export class RegistrarAsesorComponent implements OnInit {
	TipoAsesor = ['Metologico', 'Tematico']

	Asesor = new asesores();

	constructor(private asesorservice: ServiceAsesorService) { }

	ngOnInit() { }


	async onSubmit() {
		this.Asesor.Password = this.Asesor.getPassword()
		this.asesorservice.addAsesor(this.Asesor);
	}
}