import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public modifiers: string;
  @Input() public type: string;
  @Input() public isDisabled: boolean;
  @Output() public trigger: EventEmitter<void>;

  constructor() {
    this.trigger = new EventEmitter();
  }

  handleClick() {
    this.trigger.emit();
  }

}
