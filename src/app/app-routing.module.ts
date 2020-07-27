import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './user/add/add.component';
const routes: Routes = [

  { path : '', component : HomeComponent},
  { path : 'Profile', component : ProfileComponent},
  { path : 'login', component : LoginComponent},
  { path : 'add', component : AddComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
