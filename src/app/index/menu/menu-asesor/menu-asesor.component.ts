import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuOptions } from 'src/types/types';

@Component({
  selector: 'menu-asesor',
  templateUrl: './menu-asesor.component.html',
  styleUrls: ['./menu-asesor.component.css']
})
export class MenuAsesorComponent implements OnInit {
  @Output() opcion = new EventEmitter<menuOptions>();
  constructor() { }

  ngOnInit(): void {
  }
  cambiarOpcion(options: menuOptions) {
		this.opcion.emit(options);
	}

}
