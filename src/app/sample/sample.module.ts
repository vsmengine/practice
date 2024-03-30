import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { PaginatorViewComponent } from './paginator-view/paginator-view.component';


@NgModule({
  declarations: [
    PaginatorViewComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
