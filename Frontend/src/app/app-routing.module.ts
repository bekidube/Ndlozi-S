import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SalesComponent } from './sales/sales.component';



const routes: Routes = [
  {path :"",component:HomepageComponent},
  {path :"register",component:RegisterComponent},
  {path :"sales",component:SalesComponent},
  {path :"login",component:LoginComponent},
  {path :"about",component:AboutComponent},
  {path :"contact",component:ContactComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
