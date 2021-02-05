import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-button-component',
  templateUrl: './counter-button-component.component.html',
  styleUrls: ['./counter-button-component.component.css']
})
export class CounterButtonComponentComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.count += 1;
  }

}
