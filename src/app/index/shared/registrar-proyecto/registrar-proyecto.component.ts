import { Component, Inject, OnInit } from '@angular/core';
import { Anteproyecto } from 'src/models/anteproyecto';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { asesores } from 'src/models/asesores';
import { Estudiante } from 'src/models/estudiante';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';
import { ServiceAsesorService } from 'src/services/asesor.service';
import { ServiceEstudianteService } from 'src/services/estudiante.service';
import bsCustomFileInput from 'bs-custom-file-input';
import { sesion } from 'src/models/login';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { log } from 'console';

@Component({
  selector: 'registrar-proyecto',
  templateUrl: './registrar-proyecto.component.html',
  styleUrls: ['./registrar-proyecto.component.css']
})
export class RegistrarProyectoComponent implements OnInit {
  myControl = new FormControl();
  Enfoque = ['Cuantitativo', 'Cualitativo'];
  Lineas = ['Psicología Educativa', 'Psicología y las Organizaciones', 'Psicología en Contextos Sociales y Culturales', 'Psicología de la Familia', 'Psicología Clínica y de la Salud'];
  public AsesorMetodologico: asesores[] = [];
  public AsesorTematico: asesores[] = [];
  public Estudiante: Estudiante[] = [];
  anteproyecto = new Anteproyecto;

  filteredOptions: Observable<Estudiante[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: sesion, private anteproyectoservice: ServiceAnteproyectoService, public dialog: MatDialog,
    private asesorService: ServiceAsesorService, private estudianteService: ServiceEstudianteService) {

  }

  async ngOnInit() {
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

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.nombreCompleto),
        map(nombreCompleto => nombreCompleto ? this._filter(nombreCompleto) : this.Estudiante.slice())
      );
  }

  onFileChange(event) {
    this.anteproyecto.Archive = <File>event.target.files[0];

  }
  onSubmit() {
    this.anteproyecto.Student_1 = this.data.idetification;
    this.anteproyectoservice.addAnteproyecto(this.anteproyecto);
  }

  displayFn(user: Estudiante): string {
    console.log(user);
    return user && user.nombreCompleto ? user.nombreCompleto : '';
  }

  private _filter(name: string): Estudiante[] {
    const filterValue = name.toLowerCase();
    this.anteproyecto.Student_2 = name;
    return this.Estudiante.filter(option => option.nombreCompleto.toLowerCase().indexOf(filterValue) === 0);
  }
}
