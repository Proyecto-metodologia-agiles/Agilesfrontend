import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MiembroComite } from 'src/models/miembroComite';

const URL_MIEBRO_POST = 'https://localhost:44325/api/CommitteeMember/Post'
@Injectable({ providedIn: 'root' })
export class MiembroComiteService {
    constructor(private httpClient: HttpClient) { }

    addmiembroComite(comite: MiembroComite) {
        this.httpClient.post(URL_MIEBRO_POST, comite).subscribe(
            (resp) => {
                console.log(resp)
                return resp;
            });
    }

}