import { Component,OnInit,ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Estudiante} from 'src/models/estudiante';

const data: any[] = [
	{ No: 1, Nombre: 'Andres felipe',Apellido:' Perez', Cedula: 111882312, Correo: "andres@gmail.com", Telefono: '32222333', Direccion: 'Calle 13 la nevada', Semestre: 1},
  { No: 2, Nombre: 'Andres felipe',Apellido:' Perez', Cedula: 111882312, Correo: "andres@gmail.com", Telefono: '32222333', Direccion: 'Calle 13 la nevada', Semestre: 1},
];

@Component({
  selector: 'index-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudianteComponent implements OnInit {
  displayedColumns: string[] = ['No', 'Nombre','Apellido', 'Cedula', 'Correo', 'Telefono', 'Direccion', 'Semestre'];
	dataSource = data;

	@ViewChild(MatPaginatorModule, { static: false }) paginator: MatPaginatorModule;
  
  constructor() { }

  ngOnInit() {
  }

}
