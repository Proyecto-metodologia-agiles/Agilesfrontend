import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from 'src/models/login';
import { HOST_DATABASE } from 'src/database/host.database';
import { menuOptions } from 'src/types/types';

const URL_LOGIN_POST = HOST_DATABASE + 'User/Login';

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
        sessionStorage.setItem('_sesion', token);
    }

    getToken() {
        return JSON.parse(sessionStorage.getItem('_sesion'));
    }

    getTokenSession(): menuOptions {
        let session = JSON.parse(sessionStorage.getItem('_sesion'));
        return session.type;
    }

    public cerrarSesion() {
        //let token = sessionStorage.getItem('_sesion');
        //const URL_LOGOUT = '';
        sessionStorage.clear();
        //return this.httpClient.post(URL_LOGOUT, { headers: headersLogin });
    }

    public sesionValida(login: Login) {
        return login != null
            && login.Email != '' && login.Password != ''
            && login.Email != null && login.Password != null;
    }
}