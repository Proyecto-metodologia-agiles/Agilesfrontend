import { Component, OnInit } from '@angular/core';
import bsCustomFileInput from 'bs-custom-file-input';
import { MatDialog } from '@angular/material/dialog';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';
import { Anteproyecto, updateDocumento } from 'src/models/anteproyecto';
import Swal from 'sweetalert2';
import { LoginService } from 'src/services/login.service';
import { element } from 'protractor';
import { sesion } from 'src/models/login';
import { Estudiante } from 'src/models/estudiante';

@Component({
  selector: 'app-actualizar-documento',
  templateUrl: './actualizar-documento.component.html',
  styleUrls: ['./actualizar-documento.component.css']
})
export class ActualizarDocumentoComponent implements OnInit {
  nuevoArchivo = new updateDocumento();
  sseion: sesion;
  constructor(public dialog: MatDialog, private serviceAnteproyecto: ServiceAnteproyectoService,
    private Loginservice: LoginService) { }

  async ngOnInit() {
    bsCustomFileInput.init();
    this.sseion = this.Loginservice.getToken();
    await Promise.all([
      (await this.serviceAnteproyecto.getAnteproyecto()).subscribe(
        (Response: any) => {
          if (typeof Response !== 'undefined' && Response.length > 0) {
            Response.forEach(element => {
              if (element.student_1.cedula === this.sseion.idetification) {
                this.nuevoArchivo.Id = element.id;
              }
            })

          } else {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Usted no tiene Archivos proyecto asignado.',
              showConfirmButton: false,
              timer: 1500
            });
            this.dialog.closeAll();
          }

        }
      )
    ]);
  }

  onFileChange(event) {
    this.nuevoArchivo.IFormFile = <File>event.target.files[0];
  }

  onSubmit() {
    this.serviceAnteproyecto.updateArchivoProyecto(this.nuevoArchivo);
  }

}
