import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarComiteComponent } from '../shared/registrar-comite/registrar-comite.component';
import { MiembroComiteService } from 'src/services/comite.service';
import { MiembroComite } from 'src/models/miembroComite';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'index-miembros-comite',
  templateUrl: './miembros-comite.component.html',
  styleUrls: ['./miembros-comite.component.css']
})
export class MiembrosComiteComponent implements OnInit {
  displayedColumns: string[] = ['No', 'FullName', 'Email', 'Phone', 'Identification'];
  dataSource = new MatTableDataSource();
  ListComite: MiembroComite[] = [];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private ComiteService: MiembroComiteService) { }

  async ngOnInit() {
    await Promise.all([
      (await this.ComiteService.getMiembroComite()).subscribe(
        Response => {
          this.ListComite = Response;
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
        }
      )
    ]);
  }
  async viewTable() {
    await Promise.all([
      (await this.ComiteService.getMiembroComite()).subscribe(
        Response => {
          this.ListComite = Response;
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
        }
      )
    ]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegistrarComiteComponent, {
      width: '300%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.viewTable();
    });
  }

}
