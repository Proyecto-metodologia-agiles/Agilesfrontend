import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProyectoModal } from './proyecto-modal.component';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';
import { LoginService } from 'src/services/login.service';
import { sesion } from 'src/models/login';
import { evaluacion } from 'src/models/evaluacion';

@Component({
  selector: 'proyecto-evaluado',
  templateUrl: './proyecto-evaluado.component.html',
  styleUrls: ['./proyecto-evaluado.component.css']
})
export class ProyectoEvaluadoComponent implements OnInit {
  displayedColumns: string[] = ['No', 'titulo_proyecto', 'observacion', "fecha", "accion"];
  session = new sesion();
  dataSource = new MatTableDataSource();
  data = [{ No: 1, proyecto: "caminar", evaluacion: "acacaca" }];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private serviceanteproyecto: ServiceAnteproyectoService, private LoginService: LoginService) { }

  async ngOnInit() {
    this.session = this.LoginService.getToken();
    await Promise.all([
      (await this.serviceanteproyecto.getProyectoEvaluados(this.session.idetification)).subscribe(
        (Response: evaluacion[]) => {
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
        }
      )
    ]);
  }

  verEvaluacion(data: string) {
    this.dialog.open(ProyectoModal, {
      width: '400px',
      data: data
    });
  }

}
