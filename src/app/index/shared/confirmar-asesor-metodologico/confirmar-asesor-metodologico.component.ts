import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
	selector: 'confirmarasesor-metodologico',
	templateUrl: './confirmar-asesor-metodologico.component.html',
	styleUrls: ['./confirmar-asesor-metodologico.component.css']
})

export class ConfirmarAsesorMetodologicoComponent implements OnInit {
	Semestres = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

		console.log(data);

	}

	ngOnInit() {

	}


	async onSubmit() {
		console.log("guardar");

	}
}