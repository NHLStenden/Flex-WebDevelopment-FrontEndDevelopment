import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';


export class FormfieldErrorItem {
  constructor(public fieldName: string, public errorMessage: string) {}
}
const errorDescriptions = {
  required: 'Dit veld is verplicht',
  minlength: 'Te weinig tekens ingevoerd'
};


@Component({
  selector: 'app-data-entry02',
  templateUrl: './data-entry02.component.html',
  styleUrls: ['./data-entry02.component.css']
})
export class DataEntry02Component implements OnInit {

  formGroup: FormGroup;
  errorList: FormfieldErrorItem[] = [];

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group ({
      firstName: [''],
      surName: ['', [Validators.required]],
      email:  ['', [Validators.required, Validators.email]],
      username:  ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required]],
      description: ['']
    });
  }

  public onSubmit(event: Event, form: FormGroup){
    event.preventDefault();
    this.errorList = [];

    if (! this.formGroup.valid) {
      for(const controlname in this.formGroup.controls){
        let control;

        control = this.formGroup.controls[controlname];

        if (control.status === 'INVALID' /*&& control.touched*/) {
          for (const prop in control.errors){
            const errMsg = new FormfieldErrorItem(controlname, errorDescriptions[prop]);
            this.errorList.push(errMsg);
          }
        }
      }
    }else{
    }
    return true;
  }


}
