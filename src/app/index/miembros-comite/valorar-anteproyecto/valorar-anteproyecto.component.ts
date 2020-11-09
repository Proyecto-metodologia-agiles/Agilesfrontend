import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ServiceAnteproyectoService } from '../../../../services/anteproyecto.service'


@Component({
  selector: 'valorar-anteproyecto',
  templateUrl: './valorar-anteproyecto.component.html',
  styleUrls: ['./valorar-anteproyecto.component.css']
})
export class ValorarAnteproyectoComponent implements OnInit {
  displayedColumns: string[] = ['No', 'titulo', 'estudiante_1', 'estudiante_2', 'asesorMetodologico', 'asesorTematico', 'fechaInscripcion', 'estado'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private proyectoservice: ServiceAnteproyectoService) {

  }

  async ngOnInit() {
    await Promise.all([
      (await this.proyectoservice.getAnteproyecto()).subscribe(
        Response => {
          console.log(Response);
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
        }
      )
    ]);
  }

  openDialog() {
    // const dialogRef = this.dialog.open(EvaluarAteproyectoComponent, {
    //   width: '300%'
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
