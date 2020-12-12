import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceAsesorService } from 'src/services/asesor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { asesores } from 'src/models/asesores';
import { RegistrarAsesorComponent } from '../../shared/registrar-asesor/registrar-asesor.component';

@Component({
  selector: 'listar-asesores',
  templateUrl: './listar-asesores.component.html',
  styleUrls: ['./listar-asesores.component.css']
})
export class ListarAsesoresComponent implements OnInit {
  displayedColumns: string[] = ['No', 'Name_Complet', 'Email', 'Identification', 'Type_Asser', 'Phone', 'Direction'];
  dataSource = new MatTableDataSource();
  ListAsesores: asesores[] = [];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private AsesorService: ServiceAsesorService) { }

  async ngOnInit() {
    await Promise.all([
      (await this.AsesorService.getAsesores()).subscribe(
        Response => {
          this.ListAsesores = Response;
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
        }
      )
    ]);
  }
  async viewTable() {
    await Promise.all([
      (await this.AsesorService.getAsesores()).subscribe(
        Response => {
          this.ListAsesores = Response;
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
        }
      )
    ]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegistrarAsesorComponent, {
      width: '300%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.viewTable();
    });

  }


}
