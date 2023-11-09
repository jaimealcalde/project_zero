import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FridgeComponent } from './components/fridge/fridge.component';
import { EntreesComponent } from './components/entrees/entrees.component';
import { DessertComponent } from './components/dessert/dessert.component';
import { NewUserComponent } from './login/new-user/new-user.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { MainCoursesComponent } from './components/main-courses/main-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FridgeComponent,
    EntreesComponent,
    DessertComponent,
    NewUserComponent,
    RecoverPasswordComponent,
    MainCoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
