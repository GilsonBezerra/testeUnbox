import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NavComponent } from '../components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { TitleComponentComponent } from '../components/title-component/title-component.component';

@NgModule({
  declarations: [HomeComponent, DetalhesComponent, NavComponent, TitleComponentComponent],
  imports: [
    CommonModule,
    RouterModule
    
  ]
})
export class PagesModule { }
