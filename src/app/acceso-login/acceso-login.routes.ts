import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AccesoLoginComponent } from './acceso-login.component';

const routes: Routes = [
    { path: '', component: AccesoLoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccesoLoginRoutesModule { }