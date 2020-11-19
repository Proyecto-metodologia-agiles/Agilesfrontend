import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProyectoModal } from './poryecto-modal.component';

@Component({
  selector: 'proyecto-evaluado',
  templateUrl: './proyecto-evaluado.component.html',
  styleUrls: ['./proyecto-evaluado.component.css']
})
export class ProyectoEvaluadoComponent implements OnInit {
  displayedColumns: string[] = ['No', 'proyecto', 'evaluacion'];

  dataSource = new MatTableDataSource();
  data = [{ No: 1, proyecto: "caminar", evaluacion: "acacaca" }];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  verEvaluacion(data: any) {
    this.dialog.open(ProyectoModal, {
      width: '400px',
      data: data
    });
  }

}
