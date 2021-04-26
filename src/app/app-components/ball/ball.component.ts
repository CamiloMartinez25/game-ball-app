import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent {
  @Input() public number: number;
  @Input() public modifiers: string;
  @Output() public trigger: EventEmitter<void>

  constructor() {
    this.trigger = new EventEmitter();
  }

  handleClick(): void {
    this.trigger.emit();
  }

}
