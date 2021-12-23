import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name : string = '';
  username : string = '';
  password : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  signup() {
    console.log(this.name +" " + this.username + " " + this.password);
  }

}
