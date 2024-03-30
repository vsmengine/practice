import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoxComponent } from './game-box/game-box.component';

const routes: Routes = [
  {
    path: '',
    component: GameBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
