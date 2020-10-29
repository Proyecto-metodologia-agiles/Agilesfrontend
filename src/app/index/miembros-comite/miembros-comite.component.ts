import { Component, OnInit, ViewChild } from '@angular/core';
import { MiembroComiteService } from 'src/services/comite.service';

@Component({
  selector: 'index-miembros-comite',
  templateUrl: './miembros-comite.component.html',
  styleUrls: ['./miembros-comite.component.css']
})
export class MiembrosComiteComponent implements OnInit {
  Profesores: any[] = [];
  constructor(private serviceComite: MiembroComiteService) { }

  ngOnInit() {
    this.Profesores = this.serviceComite.Profesores;

  }


}
