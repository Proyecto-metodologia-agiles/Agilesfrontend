import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Anteproyecto } from 'src/models/anteproyecto';

const URLANTEPROYECTO_GET = 'https://localhost:44325/api/Anteproyecto/Anteproyectos';
const URLANTEPROYECTO_GUARDAR = 'http://localhost:44325/api/Project/Post';
@Injectable({ providedIn: 'root' })
export class ServiceAnteproyectoService {
    constructor(private httpClient: HttpClient) { }

    async getAnteproyecto() {
        return this.httpClient.get<Anteproyecto[]>(URLANTEPROYECTO_GET);
    }

    addAnteproyecto(anteproyecto: Anteproyecto) {
        this.httpClient.post(URLANTEPROYECTO_GUARDAR, anteproyecto).subscribe(
            (resp) => {
                console.log(resp)
                return resp;
            });
    }

}