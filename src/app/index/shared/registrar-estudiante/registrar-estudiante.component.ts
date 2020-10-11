import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.css']
})
export class RegistrarEstudianteComponent implements OnInit {
  Semestres = ['1', '2','3','4','5','6','7','8','9','10']
  constructor() { }

  ngOnInit(): void {
  }

}
