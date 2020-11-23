import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'modal-valoracion',
    template: `
    <h3 mat-dialog-title>Descripción de la Valoración</h3>
        <div mat-dialog-content class="mat-typography">
                <div class="row">
                    <div class="col-12">
                        <h5>{{data}}</h5>
                    </div>
                </div>
        </div>
    `,
    styleUrls: ['./proyecto-valorado.component.css']
})

export class ProyectoModal implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() { }
}