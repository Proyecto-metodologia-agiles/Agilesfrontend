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
import { ValorarAnteproyectoComponent } from "./valorar-anteproyecto/valorar-anteproyecto.component";

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule],
    declarations: [
        CofirmarAsesoriasComponent,
        EvaluarAteproyectoComponent,
        RegistrarAsesorComponent,
        RegistrarComiteComponent,
        RegistrarEstudianteComponent,
        RegistrarProyectoComponent,
        ValorarAnteproyectoComponent
    ],
    exports: [
        CofirmarAsesoriasComponent,
        EvaluarAteproyectoComponent,
        RegistrarAsesorComponent,
        RegistrarComiteComponent,
        RegistrarEstudianteComponent,
        RegistrarProyectoComponent,
        ValorarAnteproyectoComponent]
})
export class SharedModule { }

