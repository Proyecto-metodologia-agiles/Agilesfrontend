import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'modal-evaluacion',
    template: `
    <h5 mat-dialog-title>Descripción de la evalución</h5>
        <div mat-dialog-content class="mat-typography">
                <div class="row">
                    <div class="col-12">
                        <p class="text-justify font-weight-light" >{{data}}</p>
                    </div>
                </div>
        </div>
    `,
    styleUrls: ['./proyecto-evaluado.component.css']
})

export class ProyectoModal implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

    ngOnInit() { }
}