import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuOptions } from 'src/types/types'
import { MatDialog } from '@angular/material/dialog';
import { sesion } from 'src/models/login';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';


@Component({
	selector: 'index-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
	showFiller = false;
	session: sesion;
	@Output() opcion = new EventEmitter<menuOptions>();
	seleccionado: menuOptions = 'inicio';
	constructor(private dialog: MatDialog, private LoginService: LoginService, private PageRoutes: Router) {
	}


	ngOnInit() {
		this.session = this.LoginService.getToken();

	}


	cambiarOpcion(options: menuOptions) {
		this.seleccionado = options;
		this.opcion.emit(options);
	}

	cerrarSesion() {
		this.LoginService.cerrarSesion();
		this.PageRoutes.navigateByUrl('/login');
	}

}