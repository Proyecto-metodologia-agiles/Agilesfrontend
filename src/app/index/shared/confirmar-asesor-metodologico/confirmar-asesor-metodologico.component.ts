import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
	selector: 'confirmarasesor-metodologico',
	templateUrl: './confirmar-asesor-metodologico.component.html',
	styleUrls: ['./confirmar-asesor-metodologico.component.css']
})

export class ConfirmarAsesorMetodologicoComponent implements OnInit {
	Semestres = ['Corte 1', 'Corte 2'];

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

		console.log(data);

	}

	ngOnInit() {

	}


	async onSubmit() {
		console.log("guardar");

	}
}