import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuOptions } from 'src/types/types'
import { MatDialog } from '@angular/material/dialog';
import { RegistrarProyectoComponent } from '../shared/registrar-proyecto/registrar-proyecto.component';


@Component({
	selector: 'index-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
	showFiller = false;

	@Output() opcion = new EventEmitter<menuOptions>();
	seleccionado: menuOptions = 'inicio';
	constructor(private dialog: MatDialog) {
	}

	ngOnInit() { }

	cambiarOpcion(options: menuOptions) {
		this.seleccionado = options;
		this.opcion.emit(options);
	}

	openDialog() {
		const dialogRef = this.dialog.open(RegistrarProyectoComponent, {
			width: '300%',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

}