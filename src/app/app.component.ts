import { Component } from '@angular/core';
import {Parent} from './parent';
import {Child} from './child';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marinalabadze';
  users = [
    { Name: 'Marine', LastName: 'Labadze', age: 19 },
    { Name: 'Mariam', LastName: 'Baramadze', age: 68 },
    { Name: 'Khatia', LastName: 'Turmanidze', age: 19 },
    { Name: 'Luka', LastName: 'Gobechia', age: 19 },
    { firstname: 'Tamar', LastName: 'Tamarishvili', age: 19 }
  ];
  parentUsers:Parent[]=[
    {
      Id: 1,
      FirstName: 'Irakli',
      LastName: 'Chabiev',
      DateOfBirth: new Date('2000-05-15'),
      PhoneNumber: '7777777',
      Email: 'IrakliChabiev&@gmail.com'
    },
    {
      Id: 2,
      FirstName: 'Anna',
      LastName: 'Gachechiladze',
      DateOfBirth: new Date('2004-10-24'),
      PhoneNumber: '999999999',
      Email: 'anamagarya@abc.com'
    }


  ];
  receivedChildUsers: Child[] = [];

  receiveData(users: Child[]) {
    this.receivedChildUsers = users;
  }
  
}
