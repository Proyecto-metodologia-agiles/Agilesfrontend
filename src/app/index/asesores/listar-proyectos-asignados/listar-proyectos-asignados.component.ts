import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service'

@Component({
  selector: 'listar-proyectos-asignados',
  templateUrl: './listar-proyectos-asignados.component.html',
  styleUrls: ['./listar-proyectos-asignados.component.css']
})
export class ListarProyectosAsignadosComponent implements OnInit {

  displayedColumns: string[] = ['No','Documento', 'titulo','estudiante_1', 'estudiante_2', 'fechaInscripcion'];
	dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private proyectoservice: ServiceAnteproyectoService) { }

  async ngOnInit(){
    await Promise.all([
      (await this.proyectoservice.getAnteproyectoAsesor()).subscribe(
        Response => {
          console.log(Response);
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
        }
      )
    ]);
  }


}
