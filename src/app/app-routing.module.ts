import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch:'full'},
  { path: 'landing', component: LandingComponent},
  { path: 'about/:id', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
