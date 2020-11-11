import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { indexRoutesModule } from './index.routes';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index.component';
import { MenuComponent } from './menu/menu.component';
import { AngularMaterialModule } from '../angularmaterial.module';
// import { InicioComponent } from './inicio/inicio.component';
import { EstudianteComponent } from './estudiantes/estudiantes.component';
import { ListarEstudiantesComponent } from './estudiantes/listar-estudiantes/listar-estudiantes.component';
import { AsesoresComponent } from './asesores/asesores.component';
import { MiembrosComiteComponent } from './miembros-comite/miembros-comite.component';
import { GestionComiteComponent } from './miembros-comite/Gestion-Comite/Gestion-Comite.component';
import { ServiceAsesorService } from '../../services/asesor.service';
import { ServiceEstudianteService } from '../../services/estudiante.service';
import { MiembroComiteService } from 'src/services/comite.service';
import { ListarProyectoComponent } from './listar-proyecto/listar-proyecto.component';
import { ProyectoAsignarAsesorComponent } from './listar-proyecto-asignar-asesor/listar-proyecto-asignar-asesor.component';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';
import { ServiceAsesoriasService } from 'src/services/asesorias.service';
import { ListarProyectosAsignadosComponent } from './asesores/listar-proyectos-asignados/listar-proyectos-asignados.component';
import { ListarAsesoresComponent } from './asesores/listar-asesores/listar-asesores.component';
import { ProyectosAsignadosComponent } from './listar-proyecto/proyectos-asignados/proyectos-asignados.component';
import { LoginService } from 'src/services/login.service';
import { MenuAsesorComponent } from './menu/menu-asesor/menu-asesor.component';
import { MenuEstudianteComponent } from './menu/menu-estudiante/menu-estudiante.component';
import { MenuMiembroComiteComponent } from './menu/menu-miembro-comite/menu-miembro-comite.component';
import { SharedModule } from './shared/shared-module.module';
import { ValorarAnteproyectoComponent } from './miembros-comite/valorar-anteproyecto/valorar-anteproyecto.component';
import { EvaluarAnteproyectoComponent } from './asesores/evaluar-anteproyecto/evaluar-anteproyecto.component';
@NgModule({
    declarations: [
        IndexComponent,
        MenuComponent,
        EstudianteComponent,
        ListarEstudiantesComponent,
        AsesoresComponent,
        MiembrosComiteComponent,
        GestionComiteComponent,
        ListarProyectoComponent,
        ProyectoAsignarAsesorComponent,
        ProyectosAsignadosComponent,
        ListarProyectosAsignadosComponent,
        ListarAsesoresComponent,
        MenuAsesorComponent,
        MenuEstudianteComponent,
        MenuMiembroComiteComponent,
        ValorarAnteproyectoComponent,
        EvaluarAnteproyectoComponent,
    ],
    imports: [
        indexRoutesModule,
        CommonModule,
        SharedModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [ServiceAsesorService, ServiceEstudianteService, MiembroComiteService, ServiceAnteproyectoService, ServiceAsesoriasService, LoginService],
    bootstrap: [IndexComponent]
})
export class IndexModule { }
