import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsInvalidPipe } from './is-invalid.pipe';



@NgModule({
  declarations: [
    IsInvalidPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IsInvalidPipe
  ]
})
export class AppPipesModule { }
