import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonasComponent } from './components/personas/personas.component';
import { CumpleComponent } from './components/cumple/cumple.component';
import { SupervisoresComponent } from './components/supervisores/supervisores.component';
import { CursosComponent } from './components/cursos/cursos.component';

import { ReactiveFormsModule } from '@angular/forms';



import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AngularMaterialModule } from '../app/components/shared/angular-material/angular-material.component';
import { MensajeConfirmacionComponent } from './components/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { FormPersonaComponent } from './components/form-persona/form-persona.component'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormdepruebaComponent } from './components/formdeprueba/formdeprueba.component';


// calendarioo*************************



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    PersonasComponent,
    CumpleComponent,
    SupervisoresComponent,
    CursosComponent,
    MensajeConfirmacionComponent,
    FormPersonaComponent,
    FormdepruebaComponent,


  ],
  imports: [
    MatSlideToggleModule,
    MatDatepickerModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    // MatMomentDateModule,
   NgMultiSelectDropDownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
