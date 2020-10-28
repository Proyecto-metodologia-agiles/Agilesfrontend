import { Component, OnInit, EventEmitter } from '@angular/core';
import { Login } from 'src/models/login';

@Component({
  selector: 'app-acceso-login',
  templateUrl: './acceso-login.component.html',
  styleUrls: ['./acceso-login.component.css']
})
export class AccesoLoginComponent implements OnInit {
  AccesoLogin = new Login();


  constructor() {
    // this.AccesoLoginService.sesionEvent.subscribe(
    //   (Response: Login) => this.onSesionLogin(Response),
    //   error => console.log(error));
  }

  ngOnInit(): void {
  }
  onSubmit() {
    // this.AccesoLoginService.onCreateSessions(this.AccesoLogin);
  }

  // onSesionLogin(sesion: Login) {
  //   let response = this.AccesoLoginService.onComprobarSesion(sesion);

  // }


}
