import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CumpleComponent } from './components/cumple/cumple.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { PersonasComponent } from './components/personas/personas.component';

const routes: Routes = [
{path:'', redirectTo:'personas',pathMatch:'full'},

{path:'', component:PersonasComponent},
{path:'personas', component:PersonasComponent},
{path:'edit', component:FormPersonaComponent},
{path:'edit/:id', component:FormPersonaComponent},
{path:'cumple', component:CumpleComponent},
{path:'cursos', component:CursosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
