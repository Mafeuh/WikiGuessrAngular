import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesPageComponent } from './rules-page/rules-page.component';
import { GamePageComponent } from './game-page/game-page.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'rules', component: RulesPageComponent },
  { path:'game', component: GamePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
