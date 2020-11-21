import { Component, OnInit, Inject } from '@angular/core';
import { fechas } from 'src/models/fechas';
import { MiembroComiteService } from 'src/services/comite.service';

@Component({
  selector: 'registrar-fechas',
  templateUrl: './registrar-fechas.component.html',
  styleUrls: ['./registrar-fechas.component.css']
})
export class RegistrarFechasComponent implements OnInit {
  fecha = new fechas();
  constructor(private comiteService: MiembroComiteService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.fecha.DateOne = new Date("07/11/2020");
    this.fecha.DateTwo = new Date("10/12/2020");
    console.log(this.fecha);

    this.comiteService.addFechasProyecto(this.fecha);
  }
}
