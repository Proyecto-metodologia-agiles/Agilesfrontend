import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuOptions } from 'src/types/types';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarProyectoComponent } from '../../shared/registrar-proyecto/registrar-proyecto.component';
import { ActualizarDocumentoComponent } from '../../shared/actualizar-documento/actualizar-documento.component';

@Component({
  selector: 'menu-estudiante',
  templateUrl: './menu-estudiante.component.html',
  styleUrls: ['./menu-estudiante.component.css']
})
export class MenuEstudianteComponent implements OnInit {
  @Output() opcion = new EventEmitter<menuOptions>();
  constructor(private dialog: MatDialog) { }
  ngOnInit(){
    

  }
  cambiarOpcion(options: menuOptions) {
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
  openDialog2() {
		const dialogRef = this.dialog.open(ActualizarDocumentoComponent, {
			width: '300%',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

}
