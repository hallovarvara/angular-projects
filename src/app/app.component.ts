import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // person1 = { firstName: 'Jay', lastName: 'Anders' }
  // person2 = { firstName: 'Chris', lastName: 'Jason', age: 93 }

  people = [
    { firstName: 'Jay', lastName: 'Anders', age: 10, favouriteFood: ['steak','coffee','orange'] },
    { firstName: 'Chris', lastName: 'Jason', age: 93, favouriteFood: ['eggs','barbeque','tea'] },
    { firstName: 'Andy', lastName: 'Ackermann', age: 66 }
  ]

  onPersonClicked(name: string) {
    this.people = this.people.filter((person) =>
      person.firstName !== name
    )
  }
}
