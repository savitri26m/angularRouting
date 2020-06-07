import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';

// creating custom Validator to check forbidden User names

const forbiddenNamesArray = ['Anna', 'Null'];

function forbiddenNames(control: AbstractControl): { [s: string] : boolean } | null {
  console.log(forbiddenNamesArray.indexOf(control.value))
  if( forbiddenNamesArray.indexOf(control.value) !== -1) {
    return {'nameIsForbidden': true}
  }

  return null;
}



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
        'username': new FormControl('', [Validators.required, forbiddenNames ]),
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
