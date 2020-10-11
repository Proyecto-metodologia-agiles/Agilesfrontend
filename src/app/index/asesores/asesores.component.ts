import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { asesores } from 'src/models/asesores';

const data: any[] = [
	{ No: 1, Nombre: 'Andres felipe', Cedula: 111882312, correo: "andres@gmail.com", telefono: '32222333', direccion: 'Calle 13 la nevada', tipoasesor: 'metodolofgico' },
	{ No: 2, Nombre: 'Andres felipe', Cedula: 111882312, correo: "andres@gmail.com", telefono: '32222333', direccion: 'Calle 13 la nevada', tipoasesor: 'metodolofgico' },
];

@Component({
	selector: 'index-asesores',
	templateUrl: './asesores.component.html',
	styleUrls: ['./asesores.component.css']
})

export class AsesoresComponent implements OnInit {
	displayedColumns: string[] = ['No', 'Nombre', 'Cedula', 'correo', 'telefono', 'direccion', 'tipoasesor'];
	dataSource = data;

	@ViewChild(MatPaginatorModule, { static: false }) paginator: MatPaginatorModule;

	constructor() { }

	ngOnInit() {

	}
} 