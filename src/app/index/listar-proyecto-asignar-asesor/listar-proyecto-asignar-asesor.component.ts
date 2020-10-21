import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarAsesorMetodologicoComponent } from '../shared/confirmar-asesor-metodologico/confirmar-asesor-metodologico.component';



const data: any[] = [
	{ No: 1, estudiante_1: 'Andres felipe', estudiante_2: ' Perez', asesorMetodologico: "asesor M", asesorTematico: "asesor tematico", asignarasesortematico: "botones", asignarasesorMetodo: 'botones' },
	{ No: 1, estudiante_1: 'Andres felipe', estudiante_2: ' Perez', asesorMetodologico: "asesor M", asesorTematico: "asesor tematico", asignarasesortematico: "botones", asignarasesorMetodo: 'botones' },
];
@Component({
	selector: 'listar-proyecto-asignar',
	templateUrl: './listar-proyecto-asignar-asesor.component.html',
	styleUrls: ['./listar-proyecto-asignar-asesor.component.css']
})

export class ProyectoAsignarAsesorComponent implements OnInit {
	datamostrar = [];
	displayedColumns: string[] = ['No', 'estudiante_1', 'estudiante_2', 'asesorMetodologico', 'asesorTematico', 'asignarasesortematico', 'asignarasesorMetodo'];
	dataSource = new MatTableDataSource();
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

	constructor(private dialog: MatDialog) { }

	ngOnInit() {
		this.datamostrar = data;
	}


	openDialog() {
		const dialogRef = this.dialog.open(ConfirmarAsesorMetodologicoComponent, {
			width: '300%',
			data: this.datamostrar
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
}