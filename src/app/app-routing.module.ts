import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleComponent } from './pages/battle/battle.component';
<<<<<<< HEAD
const routes: Routes = [ 
  {path:'battle', component:BattleComponent},
=======
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
const routes: Routes = [ 
  {path:'battle', component:BattleComponent},
  {path:'', component:HomeComponent},
  {path:'Authentication',component:AuthenticationComponent},
>>>>>>> a60df13e14aa72011beceb8b251c5fd6819b6522
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
