import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Estudiante } from 'src/models/estudiante';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarEstudianteComponent } from '../shared/registrar-estudiante/registrar-estudiante.component';
import { ServiceEstudianteService } from 'src/services/estudiante.service';


@Component({
	selector: 'index-estudiantes',
	templateUrl: './estudiantes.component.html',
	styleUrls: ['./estudiantes.component.css']
})
export class EstudianteComponent implements OnInit {
	displayedColumns: string[] = ['No', 'NombreCompleto', 'Cedula', 'Correo', 'Celular', 'Edad','Semestre'];
	dataSource: Estudiante[] = [];

	@ViewChild(MatPaginatorModule, { static: false }) paginator: MatPaginatorModule;

	constructor(private dialog: MatDialog, private EstudianteService: ServiceEstudianteService) { }

	async ngOnInit() {
		(await this.EstudianteService.getEstudiantes()).subscribe(response => {
			this.dataSource = response
		});
	}
	async viewTable() {
		(await this.EstudianteService.getEstudiantes()).subscribe(response => {
			this.dataSource = response
		});
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
