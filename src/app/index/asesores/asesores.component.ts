import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { asesores } from 'src/models/asesores';
import { RegistrarAsesorComponent } from '../shared/registrar-asesor/registrar-asesor.component';

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

	constructor(private dialog: MatDialog) { }

	ngOnInit() {

	}

	openDialog() {
		const dialogRef = this.dialog.open(RegistrarAsesorComponent, {
			height: '450px',
			width: '300%',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
} 