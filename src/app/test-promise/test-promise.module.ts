import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPromiseRoutingModule } from './test-promise-routing.module';
import { PromiseComponent } from './promise/promise.component';
import { AwaitComponent } from './await/await.component';


@NgModule({
  declarations: [
    PromiseComponent,
    AwaitComponent
  ],
  imports: [
    CommonModule,
    TestPromiseRoutingModule
  ]
})
export class TestPromiseModule { }
