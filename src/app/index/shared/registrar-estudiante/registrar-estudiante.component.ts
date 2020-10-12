import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/models/estudiante';
import { ServiceEstudianteService } from 'src/services/estudiante.service';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.css']
})
export class RegistrarEstudianteComponent implements OnInit {
  Semestres = ['1', '2','3','4','5','6','7','8','9','10'];

  estudiante = new Estudiante;
  constructor(private estudianteservice: ServiceEstudianteService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.estudiante.Password = this.estudiante.getPassword();
		this.estudianteservice.addAsesor(this.estudiante);
	}
}
