import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;

  defaultQuestion = "pet";
  answer="";
  genders = ['male', 'female', 'other'];

  constructor() { }

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = "SuperUser";
    // this.userForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ""
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // })

    this.userForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(formEl: NgForm){
  //   console.log(formEl.value);
  // }

  onSubmit(){
    console.log(this.userForm);
  }

}
