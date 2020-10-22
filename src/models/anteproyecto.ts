export class Anteproyecto {
    Title: string;
    Archive: File;
    Focus: string;
    Cut: number;
    Line: string;
    Thematic_Advisor: number;
    Methodologic_Advisor: number;
    Student_1: string;
    Student_2: string;
  
      constructor() {
        this.Title = '';
        this.Focus = '';
        this.Archive = null;
        this.Cut = 0;
        this.Line = '';
        this.Thematic_Advisor = 0;
        this.Methodologic_Advisor = 0;
        this.Student_1 = '';
        this.Student_2 = '';
      }
}