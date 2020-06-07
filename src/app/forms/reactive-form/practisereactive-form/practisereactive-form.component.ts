import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';

function forbiddenProjectName( control: AbstractControl): {[s: string] : boolean } | null {
  if(control.value === 'test'){
    return {'projectNameForbidden': true}
  }
  return null
}

@Component({
  selector: 'app-practisereactive-form',
  templateUrl: './practisereactive-form.component.html',
  styleUrls: ['./practisereactive-form.component.css']
})
export class PractisereactiveFormComponent implements OnInit {

  projectForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl('', [Validators.required, forbiddenProjectName]),
      'email': new FormControl(''),
      'status': new FormControl('critical')
    })
  }

  onSubmit(){
    console.log(this.projectForm.value)
  }


}
