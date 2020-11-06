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
import { ListarEstudiantesComponent } from './estudiantes/listar-estudiantes/listar-estudiantes.component';
import { AsesoresComponent } from './asesores/asesores.component';
import { RegistrarAsesorComponent } from './shared/registrar-asesor/registrar-asesor.component';
import { RegistrarEstudianteComponent } from './shared/registrar-estudiante/registrar-estudiante.component';
import { MiembrosComiteComponent } from './miembros-comite/miembros-comite.component';
import { GestionComiteComponent } from './miembros-comite/Gestion-Comite/Gestion-Comite.component';
import { RegistrarComiteComponent } from './shared/registrar-comite/registrar-comite.component';
import { ServiceAsesorService } from '../../services/asesor.service';
import { ServiceEstudianteService } from '../../services/estudiante.service';
import { MiembroComiteService } from 'src/services/comite.service';
import { ListarProyectoComponent } from './listar-proyecto/listar-proyecto.component';
import { ProyectoAsignarAsesorComponent } from './listar-proyecto-asignar-asesor/listar-proyecto-asignar-asesor.component';
import { RegistrarProyectoComponent } from './shared/registrar-proyecto/registrar-proyecto.component';
import { CofirmarAsesoriasComponent } from './shared/cofirmar-asesorias/cofirmar-asesorias.component';
import { ServiceAnteproyectoService } from 'src/services/anteproyecto.service';
import { ServiceAsesoriasService } from 'src/services/asesorias.service';
import { ListarProyectosAsignadosComponent } from './asesores/listar-proyectos-asignados/listar-proyectos-asignados.component';
import { ListarAsesoresComponent } from './asesores/listar-asesores/listar-asesores.component';
import { ProyectosAsignadosComponent } from './listar-proyecto/proyectos-asignados/proyectos-asignados.component';
import { LoginService } from 'src/services/login.service';
import { MenuAsesorComponent } from './menu/menu-asesor/menu-asesor.component';
import { MenuEstudianteComponent } from './menu/menu-estudiante/menu-estudiante.component';
import { MenuMiembroComiteComponent } from './menu/menu-miembro-comite/menu-miembro-comite.component';
import { EvaluarProyectoComponent } from './miembros-comite/evaluar-proyecto/evaluar-proyecto.component';
import { EvaluarAteproyectoComponent } from './shared/evaluar-ateproyecto/evaluar-ateproyecto.component';
import { ValoracionAnteproyectoComponent } from './shared/valoracion-anteproyecto/valoracion-anteproyecto.component';
import { ValorarAnteproyectoComponent } from './shared/valorar-anteproyecto/valorar-anteproyecto.component';

@NgModule({
    declarations: [
        IndexComponent,
        InicioComponent,
        MenuComponent,
        EstudianteComponent,
        ListarEstudiantesComponent,
        AsesoresComponent,
        RegistrarAsesorComponent,
        RegistrarEstudianteComponent,
        MiembrosComiteComponent,
        GestionComiteComponent,
        RegistrarComiteComponent,
        ListarProyectoComponent,
        ProyectoAsignarAsesorComponent,
        ProyectosAsignadosComponent,
        CofirmarAsesoriasComponent,
        RegistrarProyectoComponent,
        ListarProyectosAsignadosComponent,
        ListarAsesoresComponent,
        MenuAsesorComponent,
        MenuEstudianteComponent,
        MenuMiembroComiteComponent,
        EvaluarProyectoComponent,
        EvaluarAteproyectoComponent,
        ValoracionAnteproyectoComponent,
        ValorarAnteproyectoComponent
    ],
    imports: [
        indexRoutesModule,
        CommonModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [ServiceAsesorService, ServiceEstudianteService, MiembroComiteService, ServiceAnteproyectoService, ServiceAsesoriasService, LoginService],
    bootstrap: [IndexComponent]
})
export class IndexModule { }
