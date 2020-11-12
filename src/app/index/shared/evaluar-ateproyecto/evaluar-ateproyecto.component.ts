import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { evaluacion } from 'src/models/evaluacion';
import { ServiceAsesorService } from 'src/services/asesor.service';


@Component({
	selector: 'evaluar-ateproyecto',
	templateUrl: './evaluar-ateproyecto.component.html',
	styleUrls: ['./evaluar-ateproyecto.component.css']
})

export class EvaluarAteproyectoComponent implements OnInit {
	evaluacionAnteproyecto = new evaluacion;
	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ServiceAsesor: ServiceAsesorService) { }

	ngOnInit() { }


	onSubmit() {
		this.evaluacionAnteproyecto.ProjectId = this.data;
    	this.ServiceAsesor.evaluarProyecto(this.evaluacionAnteproyecto);
	}
}