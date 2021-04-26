import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BetModel } from 'src/app/core/models/bet.model';
import { FormInputAmountComponent } from '../../../app-components/form-input-amount/form-input-amount.component';

@Component({
  selector: 'app-ball-game-form',
  templateUrl: './ball-game-form.component.html',
  styleUrls: ['./ball-game-form.component.scss']
})
export class BallGameFormComponent implements OnChanges {
  @ViewChild('betInput', {static: false}) public betAmountRef: FormInputAmountComponent
  @Input() public currentSelectedBall: number;
  @Input() public formState: boolean;
  @Output() public sendForm: EventEmitter<BetModel>;
  public betForm: FormGroup

  get buttonModifiers(): string {
    const isLoading = this.formState ? 'button--loading' : '';
    return `button--primary button--block ${isLoading}`;
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.sendForm = new EventEmitter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.currentSelectedBall?.currentValue) {
      this.currentSelectedBall = changes?.currentSelectedBall?.currentValue;
      this.initializeForm();
      this.betAmountRef?.handleFocus();
    }
  }

  play(): void {
    if (this.betForm.valid) {
      this.sendForm.emit(this.betForm.value);
    }
  }

  private initializeForm(): void {
    this.betForm = this.fb.group({
      number: [this.currentSelectedBall],
      amount: [null, [Validators.required, Validators.min(5)]]
    })
  }

}
