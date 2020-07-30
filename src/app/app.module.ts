import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { UserService } from './services/user.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    OrderModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
