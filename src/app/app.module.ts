import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroListComponent } from './heroes-file/hero-list/hero-list.component';
import { HeroDetailComponent } from './heroes-file/hero-detail/hero-detail.component';
import { HeroesFileComponent } from './heroes-file/heroes-file/heroes-file.component';
import { LoginComponent } from './login/login.component';

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      HeroListComponent,
      HeroDetailComponent,
      HeroesFileComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
