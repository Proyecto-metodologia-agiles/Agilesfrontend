import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { indexRoutesModule } from './index.routes';
import { IndexComponent } from './index.component';

@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        NgbModule,
        CommonModule,
        indexRoutesModule
    ],
    providers: [],
    bootstrap: [IndexComponent]
})
export class IndexModule { }
