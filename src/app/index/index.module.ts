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


@NgModule({
    declarations: [
        IndexComponent,
        MenuComponent,
        EstudianteComponent,
        AsesoresComponent,
        RegistrarAsesorComponent,
        InicioComponent,
        RegistrarEstudianteComponent
    ],
    imports: [
        indexRoutesModule,
        CommonModule,
        AngularMaterialModule
    ],
    providers: [],
    entryComponents: [AsesoresComponent, InicioComponent, RegistrarAsesorComponent,EstudianteComponent,RegistrarEstudianteComponent],
    bootstrap: [IndexComponent]
})
export class IndexModule { }
