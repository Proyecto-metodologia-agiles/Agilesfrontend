import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarComiteComponent } from '../shared/registrar-comite/registrar-comite.component';

const data: any[] = [
  { No: 1, Nombre: 'Andres felipe', Apellido: ' Perez', Cedula: 111882312, Correo: "andres@gmail.com", Telefono: '32222333' },
  { No: 2, Nombre: 'Andres felipe', Apellido: ' Perez', Cedula: 111882312, Correo: "andres@gmail.com", Telefono: '32222333' },
];

@Component({
  selector: 'index-miembros-comite',
  templateUrl: './miembros-comite.component.html',
  styleUrls: ['./miembros-comite.component.css']
})
export class MiembrosComiteComponent implements OnInit {
  displayedColumns: string[] = ['No', 'Nombre', 'Apellido', 'Cedula', 'Correo', 'Telefono'];
  dataSource = data;

  @ViewChild(MatPaginatorModule, { static: false }) paginator: MatPaginatorModule;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog() {
    const dialogRef = this.dialog.open(RegistrarComiteComponent, {
      width: '300%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
