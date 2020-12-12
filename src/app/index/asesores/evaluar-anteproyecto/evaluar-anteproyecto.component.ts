import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ServiceAnteproyectoService } from '../../../../services/anteproyecto.service'
import { EvaluarAteproyectoComponent } from '../../shared/evaluar-ateproyecto/evaluar-ateproyecto.component';

@Component({
  selector: 'evaluar-anteproyecto',
  templateUrl: './evaluar-anteproyecto.component.html',
  styleUrls: ['./evaluar-anteproyecto.component.css']
})
export class EvaluarAnteproyectoComponent implements OnInit {
  displayedColumns: string[] = ['No', 'titulo', 'estudiante_1', 'estudiante_2', 'fechaInscripcion', 'evaluar'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private proyectoservice: ServiceAnteproyectoService) { }

  async ngOnInit() {
    await Promise.all([
      (await this.proyectoservice.getAnteproyecto()).subscribe(
        Response => {
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
        }
      )
    ]);
  }

  openDialog(idAnteproyecto: string) {
    const dialogRef = this.dialog.open(EvaluarAteproyectoComponent, {
      width: '300%',
      data: idAnteproyecto
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
