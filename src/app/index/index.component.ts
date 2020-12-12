import { Component, OnInit } from '@angular/core';
import { sesion } from 'src/models/login';
import { LoginService } from 'src/services/login.service';
import { menuOptions } from 'src/types/types';

@Component({
	selector: 'index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
	opcionMenu: menuOptions = 'inicio';
	_session: sesion

	constructor(private LoginService: LoginService) { }

	ngOnInit() {
		this.opcionMenu = this.LoginService.getTokenSession();
	}

	verOpcion(event: menuOptions) {
		this.opcionMenu = event;
	}
}