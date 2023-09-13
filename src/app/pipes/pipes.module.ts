import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleCasePipe } from './toggle-case.pipe';
import { CanFlyPipe } from './can-fly.pipe';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ]
})
export class PipesModule { }
