import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './main-website/footer/footer.component';
import { HeaderComponent } from './main-website/header/header.component';
import { HomepageComponent } from './main-website/homepage/homepage.component';
import { OwlModule } from 'ngx-owl-carousel';
import { MainWebsiteComponent } from './main-website/main-website.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainWebsiteComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
