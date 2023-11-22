import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Parent } from '../parent';
import {Child} from '../child';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() users:Parent[]=[];


  ChildUsers:Child[]=[
    {
      Id: 1,
      Firstname: 'maka',
      Lastname: 'Chikradze',
      DateOfBirth: new Date('2005-05-15'),
      PhoneNumber: '77777587',
      Email: 'maka&@gmail.com'
    },
    {
      Id: 2,
      Firstname: 'gabo',
      Lastname: 'spiderman',
      DateOfBirth: new Date('2004-10-24'),
      PhoneNumber: '9999974359999',
      Email: 'spiderman432557@abc.com'
    }
  ];
  dataPassedBy: string = '';

  @Output() childUsersEvent = new EventEmitter<Child[]>();

  constructor() {}

  sendDataToParent() {
    this.dataPassedBy = 'Array from child component';
    this.childUsersEvent.emit(this.ChildUsers);
  }
}
