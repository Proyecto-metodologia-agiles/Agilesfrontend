import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/models/login';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-acceso-login',
  templateUrl: './acceso-login.component.html',
  styleUrls: ['./acceso-login.component.css']
})
export class AccesoLoginComponent implements OnInit {
  AccesoLogin = new Login();


  constructor(private AccesoLoginService: LoginService, private routes: Router) {
    this.AccesoLoginService.loginEvent.subscribe(
      (Response: Login) => this.onSesionLogin(Response),
      error => console.log(error));
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.AccesoLoginService.onCreadaSesion(this.AccesoLogin);
  }

  onSesionLogin(sesion: Login) {
    let response = this.AccesoLoginService.onComprobarSesion(sesion);
    response != null ?
      response.subscribe(
        (Response: any) => {
          sessionStorage.setItem('_sesion', JSON.stringify(Response));
          Response.type == 'Miembro Comite' || Response.type == 'Asesor' || Response.type == 'Estudiante' ? this.routes.navigateByUrl('index') : this.routes.navigateByUrl('login');
        },
        error => console.log(error)
      ) : null;

  }


}
