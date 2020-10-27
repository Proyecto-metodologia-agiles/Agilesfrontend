import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angularmaterial.module';
import { AccesoLoginComponent } from './acceso-login.component';
import { AccesoLoginRoutesModule } from './acceso-login.routes';
import { MiembroComiteService } from 'src/services/comite.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AccesoLoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        AccesoLoginRoutesModule,
        HttpClientModule
    ],
    exports: [],
    providers: [MiembroComiteService],
    entryComponents: [],
    bootstrap: [AccesoLoginComponent]
})


export class AccesoLoginModule { }
