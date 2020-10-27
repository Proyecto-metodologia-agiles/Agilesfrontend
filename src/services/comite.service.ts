import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MiembroComite } from 'src/models/miembroComite';

const URL_MIEMBRO_POST = 'http://localhost:44325/api/CommitteeMember/Post'
const URL_MIEMBRO_GET = 'http://localhost:44325/api/CommitteeMember/MiembrosComite'
@Injectable({ providedIn: 'root' })
export class MiembroComiteService {
    constructor(private httpClient: HttpClient) { }

    async getMiembroComite() {
        return this.httpClient.get<MiembroComite[]>(URL_MIEMBRO_GET);
    }


    addmiembroComite(comite: MiembroComite) {
        this.httpClient.post(URL_MIEMBRO_POST, comite).subscribe(
            (resp) => {
                console.log(resp)
                return resp;
            });
    }
}