import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { SalesComponent } from './sales/sales.component';
import{HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TradestatsComponent } from './tradestats/tradestats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    HomepageComponent,
    FooterComponent,
    SalesComponent,
    AboutComponent,
    ContactComponent,
    TradestatsComponent,
    LoginComponent,
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
