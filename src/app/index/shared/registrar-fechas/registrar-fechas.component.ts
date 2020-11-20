import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fechas } from 'src/models/fechas';

@Component({
  selector: 'registrar-fechas',
  templateUrl: './registrar-fechas.component.html',
  styleUrls: ['./registrar-fechas.component.css']
})
export class RegistrarFechasComponent implements OnInit {
  fecha = new fechas();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //this.ServiceComite.valorarProyecto(this.ValoracionProyecto);
  }
}
