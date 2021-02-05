import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  // @Input() person = {
  //   firstName: '',
  //   lastName: '',
  //   age: -1,
  //   favouriteFood: ['']
  // };
  //
  // @Input() i: number = 0;

  @Input() person: {
    firstName: string;
    lastName: string;
    age?: number;
    favouriteFood?: string[];
  } = {
    firstName: '',
    lastName: '',
    age: -1,
    favouriteFood: [''],
  };

  @Input() i: number = 0;

  @Output() personClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(name: string) {
    this.personClicked.emit(name);
  }
}
