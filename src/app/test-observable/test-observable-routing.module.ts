import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'observable',
    pathMatch: 'full'
  },
  {
    path: 'observable',
    component: ObservableComponent 
  },
  {
    path: 'rxjs',
    component: RxjsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestObservableRoutingModule { }
