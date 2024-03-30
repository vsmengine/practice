import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralUserFormComponent } from './general-user-form/general-user-form.component';
import { ReactiveUserFormComponent } from './reactive-user-form/reactive-user-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form-general',
    pathMatch: 'full'
  },
  {
    path: 'form-general',
    component: GeneralUserFormComponent
  },
  {
    path: 'form-reactive',
    component: ReactiveUserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
