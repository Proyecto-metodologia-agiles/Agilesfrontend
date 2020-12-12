import { Component, OnInit, Inject } from '@angular/core';
import { fechas } from 'src/models/fechas';
import { MiembroComiteService } from 'src/services/comite.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import Swal from 'sweetalert2';


@Component({
  selector: 'registrar-fechas',
  templateUrl: './registrar-fechas.component.html',
  styleUrls: ['./registrar-fechas.component.css']
})
export class RegistrarFechasComponent implements OnInit {
  fecha = new fechas();
  constructor(private comiteService: MiembroComiteService,public datpicker: MatDatepickerModule) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.fecha.DateOne<this.fecha.DateTwo){
      this.comiteService.addFechasProyecto(this.fecha);
    }else if(this.fecha.DateOne==null || this.fecha.DateTwo==null){
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Debe seleccionar las fechas',
        showConfirmButton: false,
        timer: 1500
    });
    }else{
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Las fechas seleccionadas no son correctas',
        showConfirmButton: false,
        timer: 1500
    });
    }
  }
}
