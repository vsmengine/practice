import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { HighlightDirective } from './highlight/highlight.directive';
import { TextViewComponent } from './text-view/text-view.component';


@NgModule({
  declarations: [
    HighlightDirective,
    TextViewComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
