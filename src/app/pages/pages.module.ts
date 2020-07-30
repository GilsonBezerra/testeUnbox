import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NavComponent } from '../components/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, DetalhesComponent, NavComponent],
  imports: [
    CommonModule,
    RouterModule
    
  ]
})
export class PagesModule { }
