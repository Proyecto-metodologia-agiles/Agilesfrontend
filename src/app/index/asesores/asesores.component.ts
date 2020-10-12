import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { asesores } from 'src/models/asesores';
import { RegistrarAsesorComponent } from '../shared/registrar-asesor/registrar-asesor.component';
import { ServiceAsesorService } from 'src/services/asesor.service';

@Component({
	selector: 'index-asesores',
	templateUrl: './asesores.component.html',
	styleUrls: ['./asesores.component.css']
})

export class AsesoresComponent implements OnInit {
	displayedColumns: string[] = ['No', 'Name_Complet', 'Email', 'Identification', 'Type_Asser', 'Phone', 'Direction'];
	dataSource: asesores[] = [];

	@ViewChild(MatPaginatorModule, { static: false }) paginator: MatPaginatorModule;

	constructor(private dialog: MatDialog, private AsesorService: ServiceAsesorService) { }

	async ngOnInit() {
		(await this.AsesorService.getAsesores()).subscribe(response => {
			this.dataSource = response
		});
	}
	async viewTable() {
		(await this.AsesorService.getAsesores()).subscribe(response => {
			this.dataSource = response
		});
	}

	openDialog() {
		const dialogRef = this.dialog.open(RegistrarAsesorComponent, {
			width: '300%',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
			this.viewTable();
		});
		
	}


} 