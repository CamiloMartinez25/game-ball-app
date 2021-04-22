import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './ball/ball.component';
import { FormInputAmountComponent } from './form-input-amount/form-input-amount.component';
import { FormSelectDropdownComponent } from './form-select-dropdown/form-select-dropdown.component';
import { LayoutMainSideComponent } from './layouts/layout-main-side/layout-main-side.component';



@NgModule({
  declarations: [BallComponent, FormInputAmountComponent, FormSelectDropdownComponent, LayoutMainSideComponent],
  imports: [
    CommonModule
  ]
})
export class AppComponentsModule { }
