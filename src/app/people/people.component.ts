import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})

export class PeopleComponent implements OnInit {
  buttonPressed = false;
  message = 'default message!'
  inputMessage = 'testssss'
  bikes = ['test1', 'test2']

  constuctor() {
  }
  ngOnInit(){
  }
  toggle() {
    this.buttonPressed = true;
    this.bikes.push('test')
  }
  changeInput(e){
    this.inputMessage = e.target.value
  }
}
