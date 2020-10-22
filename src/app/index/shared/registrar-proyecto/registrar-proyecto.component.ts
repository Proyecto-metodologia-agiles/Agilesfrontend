import { Component, OnInit } from '@angular/core';
import { Anteproyecto } from 'src/models/anteproyecto';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';
import bsCustomFileInput from 'bs-custom-file-input';

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
  anteproyecto = new Anteproyecto;
  constructor(private anteproyectoservice: ServiceAnteproyectoService) { }

  ngOnInit(): void {
    bsCustomFileInput.init()
  }

  onFileChange(event){
    this.anteproyecto.Archive = event.target.files;
    console.log(event);
  }

  async onSubmit() {
    //console.log(this.anteproyecto);
    this.anteproyectoservice.addAnteproyecto(this.anteproyecto);
  }
}
