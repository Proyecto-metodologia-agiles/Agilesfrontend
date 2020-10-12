import { Component, OnInit } from '@angular/core';
import { MiembroComite } from 'src/models/miembroComite';
import { MiembroComiteService } from 'src/services/comite.service';

@Component({
	selector: 'registrar-comite',
	templateUrl: './registrar-comite.component.html',
	styleUrls: ['./registrar-comite.component.css']
})

export class RegistrarComiteComponent implements OnInit {

	constructor(private comiteService: MiembroComiteService) { }

	Comite = new MiembroComite

	ngOnInit() { }

	async onSubmit() {
		this.Comite.Password = this.Comite.getPassword()
		this.comiteService.addmiembroComite(this.Comite);
	}
}