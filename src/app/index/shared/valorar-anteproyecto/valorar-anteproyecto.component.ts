import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Anteproyecto } from 'src/models/anteproyecto';
import { ValoracionProyecto } from 'src/models/miembroComite';
import { MiembroComiteService } from 'src/services/comite.service';

@Component({
  selector: 'sharedvalorar-anteproyecto',
  templateUrl: './valorar-anteproyecto.component.html',
  styleUrls: ['./valorar-anteproyecto.component.css']
})
export class ValorarAnteproyectoModalComponent implements OnInit {
  ValoracionProyecto = new ValoracionProyecto();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ServiceComite: MiembroComiteService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.ValoracionProyecto.ProjectId = this.data;
    this.ServiceComite.valorarProyecto(this.ValoracionProyecto);
  }
}
