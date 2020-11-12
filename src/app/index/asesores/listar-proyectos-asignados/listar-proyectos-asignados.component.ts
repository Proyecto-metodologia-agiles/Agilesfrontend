import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service'
import { ServiceAsesorService } from 'src/services/asesor.service';
import { sesion } from 'src/models/login';

@Component({
  selector: 'listar-proyectos-asignados',
  templateUrl: './listar-proyectos-asignados.component.html',
  styleUrls: ['./listar-proyectos-asignados.component.css']
})
export class ListarProyectosAsignadosComponent implements OnInit {

  displayedColumns: string[] = ['No', 'title', 'line', 'focus'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  sesion = new sesion();
  constructor(private dialog: MatDialog, private AnteproyectoService: ServiceAnteproyectoService) { }

  async ngOnInit() {
    this.sesion = await JSON.parse(sessionStorage.getItem('_sesion'));
    await Promise.all([
      (await this.AnteproyectoService.getAsesorAsignado(this.sesion.id)).subscribe(
        (Response: any) => {
          this.dataSource = new MatTableDataSource(Response.projects);
          this.dataSource.paginator = this.paginator;
        }
      )
    ]);
  }


}
