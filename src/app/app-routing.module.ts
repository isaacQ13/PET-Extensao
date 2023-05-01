import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { Formulario02Component } from './components/formularios/formulario02/formulario02.component';
import { Formulario01Component } from './components/formularios/formulario01/formulario01.component';

const routes: Routes = [
  {path:'menu', component: MenuComponent},
  {path:'formulario01', component: Formulario01Component},
  {path:'formulario02', component: Formulario02Component},
  {path:'', redirectTo: '/components/menu',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
