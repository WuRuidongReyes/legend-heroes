import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { HeroesFileComponent } from './heroes-file/heroes-file/heroes-file.component';


const routes: Routes = [
  { path: 'heroesfile', component: HeroesFileComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
