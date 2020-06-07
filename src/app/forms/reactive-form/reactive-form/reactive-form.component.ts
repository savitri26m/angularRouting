import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signUpForm: FormGroup;
  genders= ['male', 'female'];

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email])
      }),
      'gender': new FormControl('female', Validators.required),
      'hobbies': new FormArray([])
    })
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  onAddHobby(){
    const control = new FormControl('', Validators.required);
    this.getControls().push(control);
  }

}
