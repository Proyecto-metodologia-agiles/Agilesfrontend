import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'listar-proyecto-asignar',
	templateUrl: './listar-proyecto-asignar-asesor.component.html',
	styleUrls: ['./listar-proyecto-asignar-asesor.component.css']
})

export class ProyectoAsignarAsesorComponent implements OnInit {

	displayedColumns: string[] = ['No', 'estudiante_1', 'estudiante_2', 'asesorMetodologico', 'asesorTematico', 'asignarasesortematico', 'asignarasesorMetodo'];
	dataSource = new MatTableDataSource();
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

	constructor() { }

	ngOnInit() { }
}