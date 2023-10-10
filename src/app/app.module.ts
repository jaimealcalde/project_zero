import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';
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
    AddProductComponent,
    FridgeComponent,
    EntreesComponent,
    DessertComponent,
    NewUserComponent,
    RecoverPasswordComponent,
    MainCoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }