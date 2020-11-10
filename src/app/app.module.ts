import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeIsCO from "@angular/common/locales/es-CO";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angularmaterial.module';

registerLocaleData(localeIsCO, 'es-Co')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Co' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
