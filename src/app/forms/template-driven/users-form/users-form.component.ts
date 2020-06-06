import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  @ViewChild('f') userForm: ElementRef;

  defaultQuestion = "pet";
  answer="";

  constructor() { }

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = "SuperUser";
  }

  // onSubmit(formEl: NgForm){
  //   console.log(formEl.value);
  // }

  onSubmit(){
    console.log(this.userForm);
  }

}
