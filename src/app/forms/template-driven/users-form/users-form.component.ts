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

  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  }

  formSubmitted: boolean = false;

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
    this.formSubmitted = !this.formSubmitted;

    this.user.username = this.userForm.value.userData.username;
    this.user.email = this.userForm.value.userData.email;
    this.user.secret = this.userForm.value.secret;
    this.user.questionAnswer = this.userForm.value.questionAnswer;
    this.user.gender = this.userForm.value.gender;

    this.userForm.reset();
  }


}
