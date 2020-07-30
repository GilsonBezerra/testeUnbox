import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detalhes/:uuid', component: DetalhesComponent }
];


@NgModule({
  exports: [RouterModule],

  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
