import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { asesorias } from 'src/models/asesorias';

const URLASESORIAS_GET = 'http://localhost:44325/api/Asesor/Asesores';
const URLASESORIAS_GUARDAR = 'http://localhost:44325/api/Advisory/Post';
@Injectable({ providedIn: 'root' })
export class ServiceAsesorService {
    constructor(private httpClient: HttpClient) { }

    async getAsesores() {
        return this.httpClient.get<asesorias[]>(URLASESORIAS_GET);
    }

    addAsesor(asesorias: asesorias) {
        this.httpClient.post(URLASESORIAS_GUARDAR, asesorias).subscribe(
            (resp) => {
                console.log(resp)
                return resp;
            });
    }

}