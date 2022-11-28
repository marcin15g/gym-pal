import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietPageComponent } from './components/diet-page/diet-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TraningPageComponent } from './components/traning-page/traning-page.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'diet', component: DietPageComponent, canActivate: [AuthGuard]},
  { path: 'trainings', component: TraningPageComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginPageComponent},
  { path: '**', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
