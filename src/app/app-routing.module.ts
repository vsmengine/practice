import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sample',
    loadChildren: () => import('./sample/sample.module').then((m) => m.SampleModule)
  },
  {
    path: 'test-promise',
    loadChildren: () => import('./test-promise/test-promise.module').then((m) => m.TestPromiseModule)
  },
  {
    path: 'test-observable',
    loadChildren: () => import('./test-observable/test-observable.module').then((m) => m.TestObservableModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then((m) => m.FormModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then((m) => m.GameModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
