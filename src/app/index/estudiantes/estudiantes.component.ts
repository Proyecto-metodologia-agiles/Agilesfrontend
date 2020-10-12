import { Component, OnInit, ViewChild } from '@angular/core';
import { Estudiante } from 'src/models/estudiante';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarEstudianteComponent } from '../shared/registrar-estudiante/registrar-estudiante.component';
import { ServiceEstudianteService } from 'src/services/estudiante.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'index-estudiantes',
	templateUrl: './estudiantes.component.html',
	styleUrls: ['./estudiantes.component.css']
})
export class EstudianteComponent implements OnInit {
	displayedColumns: string[] = ['No', 'NombreCompleto', 'Cedula', 'Correo', 'Celular', 'Edad', 'Semestre'];
	dataSource = new MatTableDataSource();
	Listestudiante: Estudiante[] = [];
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

	constructor(private dialog: MatDialog, private EstudianteService: ServiceEstudianteService) { }

	async ngOnInit() {
		await Promise.all([
			(await this.EstudianteService.getEstudiantes()).subscribe(
				Response => {
					this.Listestudiante = Response;
					this.dataSource = new MatTableDataSource(Response);
					this.dataSource.paginator = this.paginator;
				}
			)
		]);
	}
	async viewTable() {
		await Promise.all([
			(await this.EstudianteService.getEstudiantes()).subscribe(
				Response => {
					this.Listestudiante = Response;
					this.dataSource = new MatTableDataSource(Response);
					this.dataSource.paginator = this.paginator;
				}
			)
		]);
	}
	openDialog() {
		const dialogRef = this.dialog.open(RegistrarEstudianteComponent, {
			width: '300%',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
			this.viewTable();
		});
	}
}
