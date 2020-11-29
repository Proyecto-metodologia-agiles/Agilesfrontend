import { Component, OnInit } from '@angular/core';
import bsCustomFileInput from 'bs-custom-file-input';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-actualizar-documento',
  templateUrl: './actualizar-documento.component.html',
  styleUrls: ['./actualizar-documento.component.css']
})
export class ActualizarDocumentoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

 async ngOnInit() {
  bsCustomFileInput.init();
  }

  onFileChange(event) {
    //this.anteproyecto.Archive = <File>event.target.files[0];
    //asignar el file event al atributo donde se vaya a enviar el archivo

  }

  onSubmit(){
    
  }

}
