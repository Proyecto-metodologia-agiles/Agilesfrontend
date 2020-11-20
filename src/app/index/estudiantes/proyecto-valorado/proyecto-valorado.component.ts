import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProyectoModal } from './proyecto-modal.component';

@Component({
  selector: 'proyecto-valorado',
  templateUrl: './proyecto-valorado.component.html',
  styleUrls: ['./proyecto-valorado.component.css']
})
export class ProyectoValoradoComponent implements OnInit {
  displayedColumns: string[] = ['No', 'proyecto', 'valoracion'];

  dataSource = new MatTableDataSource();
  data = [{ No: 1, proyecto: "conocimiento cognitivo", valoracion: "aprobado" }];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  verValoracion(data: any) {
    this.dialog.open(ProyectoModal, {
      width: '400px',
      data: data
    });
  }
}
