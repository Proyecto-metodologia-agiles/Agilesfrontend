export class asesorias {
    TituloProyecto: string;
    IdThematicAdvisor: number;
    IdMetodologicAdvisor: number;
    AssignedHours: number;
    semester: string;
 

    constructor() {
        this.TituloProyecto = '';
        this.IdThematicAdvisor = 0;
        this.IdMetodologicAdvisor = 0;
        this.AssignedHours = 0;
        this.semester = '';
    }
}