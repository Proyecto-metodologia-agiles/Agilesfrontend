import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProyectoModal } from './proyecto-modal.component';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';
import { LoginService } from 'src/services/login.service';
import { sesion } from 'src/models/login';
import { ValoracionProyecto } from 'src/models/miembroComite';

@Component({
  selector: 'proyecto-valorado',
  templateUrl: './proyecto-valorado.component.html',
  styleUrls: ['./proyecto-valorado.component.css']
})
export class ProyectoValoradoComponent implements OnInit {
  displayedColumns: string[] = ['No', 'proyecto','fecha', 'valoracion'];
  session: sesion;
  dataSource = new MatTableDataSource();
  //data = [{ No: 1, proyecto: "conocimiento cognitivo", valoracion: "aprobado" }];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private dialog: MatDialog,private serviceanteproyecto: ServiceAnteproyectoService, private LoginService: LoginService) { }

  async ngOnInit(){
    this.session = this.LoginService.getToken();
    await Promise.all([
      (await this.serviceanteproyecto.getProyectoValorados(this.session.idetification)).subscribe(
        (Response: ValoracionProyecto[]) => {
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
        }
      )
    ]);
  }

  verValoracion(data: any) {
    this.dialog.open(ProyectoModal, {
      width: '400px',
      data: data,
      
    });
  }
}
