import { Component } from '@angular/core';
import { Gender, IPerson } from 'src/models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sathi Akter';

  today = Date.now();

  course = "Web Application Development";
  
  sathi: IPerson = {
    firstName: "Sathi",
    lastName: "Akter",
    course: this.course,
    age: 23,
    sex: Gender.female,
    address: '',
    phoneNumber: '',
  }

}


