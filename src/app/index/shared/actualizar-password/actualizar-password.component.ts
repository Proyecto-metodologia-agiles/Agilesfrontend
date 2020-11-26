import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { actualizar_contrasena, sesion } from 'src/models/login';
import { Login } from 'src/models/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'actualizar-password',
  templateUrl: './actualizar-password.component.html',
  styleUrls: ['./actualizar-password.component.css']
})
export class ActualizarPasswordComponent implements OnInit {
  session: sesion;
  login = new Login;
  actualizar_contrasena = new actualizar_contrasena();
  temporal: string;
  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.session = this.LoginService.getToken();
    if (this.temporal != this.login.Password) {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Las contraseñas no coinciden',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      this.login.Email = this.session.email;
      this.actualizar_contrasena.identification = this.session.idetification;
      this.actualizar_contrasena.Password = this.login.Password;
      this.LoginService.updateActualizarContrasena(this.actualizar_contrasena)
    }
  }
}
