import { Component, OnInit, EventEmitter } from '@angular/core';
import { Login } from 'src/models/login';

@Component({
  selector: 'app-acceso-login',
  templateUrl: './acceso-login.component.html',
  styleUrls: ['./acceso-login.component.css']
})
export class AccesoLoginComponent implements OnInit {
  AccesoLogin = new Login();


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.AccesoLogin);
  }


}
