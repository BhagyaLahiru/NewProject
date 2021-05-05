import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { GemComponent } from './gem/gem.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/registration', component: RegistrationComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'gem', component: GemComponent },
  { path: 'payment-details', component: PaymentDetailsComponent },
  { path: 'payment-details/payment-detail-form', component: PaymentDetailFormComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
