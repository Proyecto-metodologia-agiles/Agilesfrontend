import { Component, OnInit } from '@angular/core';
import { EvaluarAteproyectoComponent } from '../../shared/evaluar-ateproyecto/evaluar-ateproyecto.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiceAsesorService } from 'src/services/asesor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'index-evaluar-proyecto',
  templateUrl: './evaluar-proyecto.component.html',
  styleUrls: ['./evaluar-proyecto.component.css']
})
export class EvaluarProyectoComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EvaluarAteproyectoComponent, {
      width: '300%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
