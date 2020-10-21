import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registrar-proyecto',
  templateUrl: './registrar-proyecto.component.html',
  styleUrls: ['./registrar-proyecto.component.css']
})
export class RegistrarProyectoComponent implements OnInit {
  Enfoque = ['Cuantitativo', 'Cualitativo'];
  Lineas = ['Psicología Educativa','Psicología y las Organizaciones','Psicología en Contextos Sociales y Culturales','Psicología de la Familia','Psicología Clínica y de la Salud'];
  Asesor = ['Andrea','Andres'];
  Estudiante = ['luis'];
  constructor() { }

  ngOnInit(): void {
  }

}
