import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestObservableRoutingModule } from './test-observable-routing.module';
import { ObservableComponent } from './observable/observable.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    ObservableComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    TestObservableRoutingModule
  ]
})
export class TestObservableModule { }
