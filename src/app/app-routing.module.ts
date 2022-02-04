import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleComponent } from './pages/battle/battle.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
const routes: Routes = [ 
  {path:'battle', component:BattleComponent},
  {path:'', component:HomeComponent},
  {path:'Authentication',component:AuthenticationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
