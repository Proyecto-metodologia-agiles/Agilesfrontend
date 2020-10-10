import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuOptions } from 'src/types/types'


@Component({
	selector: 'index-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

	@Output() opcion = new EventEmitter<menuOptions>();
	seleccionado: menuOptions = 'inicio';
	constructor() {
	}

	ngOnInit() { }

	cambiarOpcion(options: menuOptions) {
		console.log(options);

		this.seleccionado = options;
		this.opcion.emit(options);
	}
}