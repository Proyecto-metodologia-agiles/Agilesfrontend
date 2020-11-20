import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuOptions } from 'src/types/types';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarFechasComponent } from '../../shared/registrar-fechas/registrar-fechas.component';

@Component({
  selector: 'menu-miembro-comite',
  templateUrl: './menu-miembro-comite.component.html',
  styleUrls: ['./menu-miembro-comite.component.css']
})
export class MenuMiembroComiteComponent implements OnInit {
  @Output() opcion = new EventEmitter<menuOptions>();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cambiarOpcion(options: menuOptions) {
    this.opcion.emit(options);
  }

  openDialog() {
		const dialogRef = this.dialog.open(RegistrarFechasComponent, {
			width: '300%',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

}
