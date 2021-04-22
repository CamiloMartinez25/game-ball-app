import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent implements OnInit {
  @Input() public number: number;
  @Input() public modifiers: string;

  constructor() { }

  ngOnInit(): void {
  }

}
