import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { StartComponent } from './start/start.component';
import { AmadorComponent } from './amador/amador.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registry', component: RegistryComponent},
  { path: 'start', component: StartComponent},
  { path: 'amador', component: AmadorComponent},
  { path: '', component: HomeComponent}
];


@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
