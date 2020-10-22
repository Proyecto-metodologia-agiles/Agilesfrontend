import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CofirmarAsesoriasComponent } from '../shared/cofirmar-asesorias/cofirmar-asesorias.component';



const data: any[] = [
	{ No: 1, titulo: "proyecto1", estudiante_1: 'Andres felipe', estudiante_2: ' Perez', asesorMetodologico: "asesor M", asesorTematico: "asesor tematico", asignartipoasesor: "botones" },
	{ No: 2, titulo: "proyecto1", estudiante_1: 'Andrea ramires', estudiante_2: ' Perez', asesorMetodologico: "asesor M", asesorTematico: "asesor tematico", asignartipoasesor: "botones" },
];
@Component({
	selector: 'listar-proyecto-asignar',
	templateUrl: './listar-proyecto-asignar-asesor.component.html',
	styleUrls: ['./listar-proyecto-asignar-asesor.component.css']
})

export class ProyectoAsignarAsesorComponent implements OnInit {
	datamostrar = [];
	displayedColumns: string[] = ['No', 'titulo', 'estudiante_1', 'estudiante_2', 'asesorMetodologico', 'asesorTematico', 'asignartipoasesor'];
	dataSource = new MatTableDataSource();
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

	constructor(private dialog: MatDialog) { }

	ngOnInit() {
		this.datamostrar = data;
	}


	openDialog(id: any) {
		const dialogRef = this.dialog.open(CofirmarAsesoriasComponent, {
			width: '300%',
			data: id
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
}