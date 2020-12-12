import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CofirmarAsesoriasComponent } from '../shared/cofirmar-asesorias/cofirmar-asesorias.component';
import { ServiceAnteproyectoService } from '../../../services/anteproyecto.service'


const data: any[] = [];
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

	constructor(private dialog: MatDialog, private proyectoservice: ServiceAnteproyectoService) { }


	async ngOnInit() {
		await Promise.all([
		  (await this.proyectoservice.getAnteproyecto()).subscribe(
			Response => {
			
			   this.datamostrar = Response;
			}
		  )
		]);
	
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