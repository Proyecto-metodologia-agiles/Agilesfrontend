import { Component, OnInit } from '@angular/core';
import { ValoracionProyecto } from 'src/models/evaluacion';

@Component({
  selector: 'valorar-anteproyecto',
  templateUrl: './valorar-anteproyecto.component.html',
  styleUrls: ['./valorar-anteproyecto.component.css']
})
export class ValorarAnteproyectoComponent implements OnInit {
  ValoracionProyecto = new ValoracionProyecto();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
