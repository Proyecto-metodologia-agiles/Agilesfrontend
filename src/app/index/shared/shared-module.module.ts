import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angularmaterial.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CofirmarAsesoriasComponent } from "./cofirmar-asesorias/cofirmar-asesorias.component";
import { EvaluarAteproyectoComponent } from "./evaluar-ateproyecto/evaluar-ateproyecto.component";
import { RegistrarAsesorComponent } from "./registrar-asesor/registrar-asesor.component";
import { RegistrarComiteComponent } from "./registrar-comite/registrar-comite.component";
import { RegistrarEstudianteComponent } from "./registrar-estudiante/registrar-estudiante.component";
import { RegistrarProyectoComponent } from "./registrar-proyecto/registrar-proyecto.component";
import { ValorarAnteproyectoModalComponent } from "./valorar-anteproyecto/valorar-anteproyecto.component";
import { RegistrarFechasComponent } from './registrar-fechas/registrar-fechas.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ActualizarPasswordComponent } from './actualizar-password/actualizar-password.component';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,MatDatepickerModule],
    declarations: [
        CofirmarAsesoriasComponent,
        EvaluarAteproyectoComponent,
        RegistrarAsesorComponent,
        RegistrarComiteComponent,
        RegistrarEstudianteComponent,
        RegistrarProyectoComponent,
        ValorarAnteproyectoModalComponent,
        RegistrarFechasComponent,
        ActualizarPasswordComponent
    ],
    exports: [
        CofirmarAsesoriasComponent,
        EvaluarAteproyectoComponent,
        RegistrarAsesorComponent,
        RegistrarComiteComponent,
        RegistrarEstudianteComponent,
        RegistrarProyectoComponent,
        ValorarAnteproyectoModalComponent]
})
export class SharedModule { }

