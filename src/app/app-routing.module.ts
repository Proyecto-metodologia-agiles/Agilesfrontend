import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoLoginComponent } from './acceso-login/acceso-login.component';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
    { path: 'login', loadChildren: () => import('./acceso-login/acceso-login.module').then(m => m.AccesoLoginModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

