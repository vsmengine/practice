import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { AwaitComponent } from './await/await.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'promise',
    pathMatch: 'full'
  },
  {
    path: 'promise',
    component: PromiseComponent 
  },
  {
    path: 'await',
    component: AwaitComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPromiseRoutingModule { }
