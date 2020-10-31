import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuOptions } from 'src/types/types';

@Component({
  selector: 'menu-miembro-comite',
  templateUrl: './menu-miembro-comite.component.html',
  styleUrls: ['./menu-miembro-comite.component.css']
})
export class MenuMiembroComiteComponent implements OnInit {
  @Output() opcion = new EventEmitter<menuOptions>();
  constructor() { }

  ngOnInit(): void {
  }

  cambiarOpcion(options: menuOptions) {
    this.opcion.emit(options);
  }

}
