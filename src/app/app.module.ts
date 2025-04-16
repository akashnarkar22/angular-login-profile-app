import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { ProfilesComponent } from './Component/profiles/profiles.component';
import { UsersComponent } from './Component/users/users.component';
import { ProductComponent } from './Component/product/product.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfilesComponent,
    UsersComponent,
    ProductComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([]), 
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3000,          // Toast display time
      positionClass: 'toast-top-right', // Position of the toast
      preventDuplicates: true,  // Avoid duplicate toasts
    }),
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
