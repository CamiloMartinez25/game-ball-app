import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './ball/ball.component';
import { FormInputAmountComponent } from './form-input-amount/form-input-amount.component';
import { LayoutMainSideComponent } from './layouts/layout-main-side/layout-main-side.component';
import { GameCardComponent } from './game-card/game-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from 'angular-imask';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    BallComponent,
    FormInputAmountComponent,
    LayoutMainSideComponent,
    GameCardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IMaskModule,
  ],
  exports: [
    BallComponent,
    FormInputAmountComponent,
    LayoutMainSideComponent,
    GameCardComponent,
    ButtonComponent
  ]
})
export class AppComponentsModule { }
