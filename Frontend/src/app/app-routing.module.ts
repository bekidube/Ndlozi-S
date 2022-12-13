import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SalesComponent } from './sales/sales.component';
import { TradestatsComponent } from './tradestats/tradestats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuardService } from './guard.service';



const routes: Routes = [
  {path :"home",component:HomepageComponent},
  {path :"sales",component:SalesComponent },
  {path :"about",component:AboutComponent },
  {path :"contact",component:ContactComponent},
  {path :"login",component:LoginComponent},
  {path :"",component:RegisterComponent},
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
