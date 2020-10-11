import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-registrar-asesor',
	templateUrl: './registrar-asesor.component.html',
	styleUrls: ['./registrar-asesor.component.css']
})

export class RegistrarAsesorComponent implements OnInit {
	TipoAsesor = ['Metologico', 'Tematico']
	constructor() { }

	ngOnInit() { }
}