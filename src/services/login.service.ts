import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from 'src/models/login';

const URL_LOGIN_POST = 'http://localhost:44325/api/CommitteeMember/Post';

const headersLogin = new HttpHeaders();
headersLogin.set('Content-Type', 'application/json');
@Injectable({ providedIn: 'root' })
export class LoginService {
    public loginEvent = new EventEmitter<Login>();

    constructor(private httpClient: HttpClient) { }

    public onCreadaSesion(login: Login) {
        this.sesionValida(login) ? this.loginEvent.emit(login) : null;
    }

    public onComprobarSesion(login: Login) {
        return this.sesionValida(login) ?
            this.httpClient.post<Login>(URL_LOGIN_POST, login, { headers: headersLogin }) : null;
    }

    public set onSesionIniciada(login: Login) {
        sessionStorage.setItem('_sesion', JSON.stringify(login));
    }

    public get onSesionIniciada(): Login {
        let sesion = sessionStorage.getItem('_sesion');
        return sesion === null ? null : <Login>JSON.parse(sesion);
    }

    setToken(token): void {
        sessionStorage.setItem('_token', token);
    }

    getToken() {
        return sessionStorage.getItem('_token');
    }

    public cerrarSesion() {
        let token = sessionStorage.getItem('_token');
        const URL_LOGOUT = '';
        sessionStorage.clear();
        return this.httpClient.post(URL_LOGOUT, { headers: headersLogin });
    }

    public sesionValida(login: Login) {
        return login != null
            && login.Email != '' && login.Password != ''
            && login.Email != null && login.Password != null;
    }
}