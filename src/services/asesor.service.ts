import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { asesores } from 'src/models/asesores';

const URLASESOR_GET = 'http://localhost:44325/api/Asesor/Asesores';
const URLASESORMETODOLOGICO_GET = 'http://localhost:44325/api/Asesor/AsesoresMetodologicos';
const URLASESORTEMATICO_GET = 'http://localhost:44325/api/Asesor/AsesoresTematicos';
const URLASESOR_GUARDAR = 'http://localhost:44325/api/Asesor/Post';
@Injectable({ providedIn: 'root' })
export class ServiceAsesorService {
    constructor(private httpClient: HttpClient) { }

    async getAsesores() {
        return this.httpClient.get<asesores[]>(URLASESOR_GET);
    }

    async getAsesoresMetodologicos(){
        return this.httpClient.get<asesores[]>(URLASESORMETODOLOGICO_GET);
    }

    async getAsesoresTematicos(){
        return this.httpClient.get<asesores[]>(URLASESORTEMATICO_GET);
    }

    addAsesor(asesor: asesores) {
        this.httpClient.post(URLASESOR_GUARDAR, asesor).subscribe(
            (resp) => {
                console.log(resp)
                return resp;
            });
    }

}