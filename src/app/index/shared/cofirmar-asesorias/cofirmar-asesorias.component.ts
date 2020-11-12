import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ServiceAsesorService } from 'src/services/asesor.service';
import { ServiceAsesoriasService } from 'src/services/asesorias.service';
import { asesores } from 'src/models/asesores';
import { asesorias } from 'src/models/asesorias';



@Component({
	selector: 'cofirmar-asesorias',
	templateUrl: './cofirmar-asesorias.component.html',
	styleUrls: ['./cofirmar-asesorias.component.css']
})

export class CofirmarAsesoriasComponent implements OnInit {
	Cortes = ['Corte 1', 'Corte 2'];
	public AsesorMetodologico: asesores[] = [];
	public AsesorTematico: asesores[] = [];
	asesorias = new asesorias();

	myControl = new FormControl();
	myContro2 = new FormControl();
	//filteredOptions: Observable<asesores[]>;
	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private asesorService: ServiceAsesorService, private asesoriasServe: ServiceAsesoriasService) {
	}
	async ngOnInit() {
		(await this.asesorService.getAsesoresMetodologicos()).subscribe(Response => {
			this.AsesorMetodologico = Response;
		});
		(await this.asesorService.getAsesoresTematicos()).subscribe(Response => {
			this.AsesorTematico = Response;
		});
	}

	async onSubmit() {

		this.asesorias.TituloProyecto = this.data.title;

		this.asesoriasServe.addAsesorias(this.asesorias);

	}

	// displayFn(user: asesores): string {
	// 	return user && user.Name_Complet ? user.Name_Complet : '';
	// }

	// private _filter(name: string): asesores[] {
	// 	const filterValue = name.toLowerCase();
	// 	return this.AsesorMetodologico.filter(option => option.Name_Complet.toLowerCase().indexOf(filterValue) === 0);
	// }
}