import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { GeneralUserFormComponent } from './general-user-form/general-user-form.component';
import { GeneralAddressFormComponent } from './general-address-form/general-address-form.component';
import { ReactiveUserFormComponent } from './reactive-user-form/reactive-user-form.component';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GeneralUserFormComponent,
    GeneralAddressFormComponent,
    ReactiveUserFormComponent,
    ReactiveAddressFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ]
})
export class FormModule { }
