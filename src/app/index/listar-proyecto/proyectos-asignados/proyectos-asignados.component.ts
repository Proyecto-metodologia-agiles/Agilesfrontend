import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ServiceAnteproyectoService } from '../../../../services/anteproyecto.service';


@Component({
	selector: 'proyectos-asignados',
	templateUrl: './proyectos-asignados.component.html',
	styleUrls: ['./proyectos-asignados.component.css']
})

export class ProyectosAsignadosComponent implements OnInit {
	displayedColumns: string[] = ['No', 'titulo', 'estudiante_1', 'estudiante_2', 'asesorMetodologico', 'asesorTematico', 'fechaInscripcion', 'estado'];
	dataSource = new MatTableDataSource();
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

	constructor(private dialog: MatDialog, private proyectoservice: ServiceAnteproyectoService) {

	}

	async ngOnInit() {
		// await Promise.all([
		// 	(await this.proyectoservice.getAnteproyectAsignados()).subscribe(
		// 		Response => {
		// 			console.log(Response);
		// 			this.dataSource = new MatTableDataSource(Response);
		// 			this.dataSource.paginator = this.paginator;
		// 		}
		// 	)
		// ]);

	}
}