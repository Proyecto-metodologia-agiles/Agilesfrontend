import { Component, OnInit } from '@angular/core';
import { Anteproyecto } from 'src/models/anteproyecto';
import { MatDialog } from '@angular/material/dialog';
import { asesores } from 'src/models/asesores';
import { Estudiante } from 'src/models/estudiante';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';
import { ServiceAsesorService } from 'src/services/asesor.service';
import { ServiceEstudianteService } from 'src/services/estudiante.service';
import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'registrar-proyecto',
  templateUrl: './registrar-proyecto.component.html',
  styleUrls: ['./registrar-proyecto.component.css']
})
export class RegistrarProyectoComponent implements OnInit {
  Enfoque = ['Cuantitativo', 'Cualitativo'];
  Lineas = ['Psicología Educativa','Psicología y las Organizaciones','Psicología en Contextos Sociales y Culturales','Psicología de la Familia','Psicología Clínica y de la Salud'];
  public AsesorMetodologico:asesores[]= [];
  public AsesorTematico:asesores[]= [];
  public Estudiante:Estudiante[] = [];
  anteproyecto = new Anteproyecto;
  constructor(private anteproyectoservice: ServiceAnteproyectoService, public dialog: MatDialog, 
    private asesorService:ServiceAsesorService, private estudianteService:ServiceEstudianteService) {
    
  }

  async ngOnInit(){
    bsCustomFileInput.init();
    (await this.asesorService.getAsesoresMetodologicos()).subscribe(Response => {
      this.AsesorMetodologico = Response;

    });
    (await this.asesorService.getAsesoresTematicos()).subscribe(Response => {
      this.AsesorTematico = Response;

    });
    (await this.estudianteService.getEstudiantesSinProyecto()).subscribe(Response => {
      this.Estudiante = Response;
    });
  }

  onFileChange(event){
    this.anteproyecto.Archive = <File> event.target.files[0];

  }
  onSubmit(){
    this.anteproyectoservice.addAnteproyecto(this.anteproyecto);
  }
}
