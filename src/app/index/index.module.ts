import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { indexRoutesModule } from './index.routes';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index.component';
import { MenuComponent } from './menu/menu.component';
import { AngularMaterialModule } from '../angularmaterial.module';
import { InicioComponent } from './inicio/inicio.component';
import { EstudianteComponent } from './estudiantes/estudiantes.component';
import { AsesoresComponent } from './asesores/asesores.component';
import { RegistrarAsesorComponent } from './shared/registrar-asesor/registrar-asesor.component';
import { RegistrarEstudianteComponent } from './shared/registrar-estudiante/registrar-estudiante.component';
import { MiembrosComiteComponent } from './miembros-comite/miembros-comite.component';
import { RegistrarComiteComponent } from './shared/registrar-comite/registrar-comite.component';
import { ServiceAsesorService } from '../../services/asesor.service';
import { ServiceEstudianteService } from '../../services/estudiante.service';
import { MiembroComiteService } from 'src/services/comite.service';
import { ListarProyectoComponent } from './listar-proyecto/listar-proyecto.component';
import { ProyectoAsignarAsesorComponent } from './listar-proyecto-asignar-asesor/listar-proyecto-asignar-asesor.component';
import { ConfirmarAsesorMetodologicoComponent } from './shared/confirmar-asesor-metodologico/confirmar-asesor-metodologico.component';

@NgModule({
    declarations: [
        IndexComponent,
        InicioComponent,
        MenuComponent,
        EstudianteComponent,
        AsesoresComponent,
        RegistrarAsesorComponent,
        RegistrarEstudianteComponent,
        MiembrosComiteComponent,
        RegistrarComiteComponent,
        ListarProyectoComponent,
        ProyectoAsignarAsesorComponent,
        ConfirmarAsesorMetodologicoComponent
    ],
    imports: [
        indexRoutesModule,
        CommonModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [ServiceAsesorService, ServiceEstudianteService, MiembroComiteService],
    entryComponents: [AsesoresComponent, InicioComponent, RegistrarAsesorComponent, EstudianteComponent, RegistrarEstudianteComponent, MiembrosComiteComponent, ProyectoAsignarAsesorComponent, ConfirmarAsesorMetodologicoComponent],
    bootstrap: [IndexComponent]
})
export class IndexModule { }
