import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { asesores } from 'src/models/asesores';

const URLASESOR = 'https://localhost:44325/api/asesor/get';
const URLASESOR_GUARDAR = 'https://localhost:44325/api/Asesor/Post';
@Injectable({ providedIn: 'root' })
export class ServiceAsesorService {
    constructor(private httpClient: HttpClient) { }


    addAsesor(asesor: asesores) {
        this.httpClient.post(URLASESOR_GUARDAR, asesor).subscribe(
            (resp) => {
                console.log(resp)
                return resp;
            });
    }

}