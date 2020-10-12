import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { indexRoutesModule } from './index.routes';
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
        RegistrarComiteComponent
    ],
    imports: [
        indexRoutesModule,
        CommonModule,
        AngularMaterialModule
    ],
    providers: [],
    entryComponents: [AsesoresComponent, InicioComponent, RegistrarAsesorComponent, EstudianteComponent, RegistrarEstudianteComponent, MiembrosComiteComponent],
    bootstrap: [IndexComponent]
})
export class IndexModule { }
