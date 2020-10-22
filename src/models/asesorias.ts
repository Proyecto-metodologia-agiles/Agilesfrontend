export class asesorias {
    IdProyecto: number;
    IdThematicAdvisor: number;
    IdMetodologicAdvisor: number;
    AssignedHours: number;
    semester: string;
    Year: string;

    constructor() {
        this.IdProyecto = 0;
        this.IdThematicAdvisor = 0;
        this.IdMetodologicAdvisor = 0;
        this.AssignedHours = 0;
        this.semester = '';
        this.Year = '';
    }
}