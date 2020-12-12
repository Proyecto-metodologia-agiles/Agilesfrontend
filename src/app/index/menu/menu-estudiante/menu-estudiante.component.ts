import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuOptions } from 'src/types/types';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarProyectoComponent } from '../../shared/registrar-proyecto/registrar-proyecto.component';
import { ActualizarDocumentoComponent } from '../../shared/actualizar-documento/actualizar-documento.component';
import { LoginService } from 'src/services/login.service';
import { sesion } from 'src/models/login';

@Component({
	selector: 'menu-estudiante',
	templateUrl: './menu-estudiante.component.html',
	styleUrls: ['./menu-estudiante.component.css']
})
export class MenuEstudianteComponent implements OnInit {
	session: sesion;
	@Output() opcion = new EventEmitter<menuOptions>();
	constructor(private dialog: MatDialog, private LoginService: LoginService) { }

	ngOnInit() {
		this.session = this.LoginService.getToken();
		console.log(this.session);

	}
	cambiarOpcion(options: menuOptions) {
		this.opcion.emit(options);
	}
	openDialog() {
		const dialogRef = this.dialog.open(RegistrarProyectoComponent, {
			data: this.session,
			width: '300%',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
	openDialog2() {
		const dialogRef = this.dialog.open(ActualizarDocumentoComponent, {
			width: '300%',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

}
