import { Component, OnInit } from '@angular/core';
import { ValoracionProyecto } from 'src/models/evaluacion';

@Component({
  selector: 'sharedvalorar-anteproyecto',
  templateUrl: './valorar-anteproyecto.component.html',
  styleUrls: ['./valorar-anteproyecto.component.css']
})
export class ValorarAnteproyectoModalComponent implements OnInit {
  ValoracionProyecto = new ValoracionProyecto();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
