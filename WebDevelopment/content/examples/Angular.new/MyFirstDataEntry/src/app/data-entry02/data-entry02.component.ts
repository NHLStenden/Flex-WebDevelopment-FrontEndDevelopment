import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


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

  ngOnInit() {

  }

  public onSubmit(event: Event, form: FormGroup){
    event.preventDefault();
    this.errorList = [];

    if (! this.formGroup.valid) {
      for(const controlname in this.formGroup.controls){
        let control;

        control = this.formGroup.controls[controlname];

        if (control !== undefined && control.status === 'INVALID' /*&& control.touched*/) {
          console.log(control.errors);

          if (control.errors){
            if (control.errors["email"]) {this.errorList.push(new FormfieldErrorItem(controlname, 'Ongeldig email adres'));}
            if (control.errors["required"]) {this.errorList.push(new FormfieldErrorItem(controlname, 'Dit veld is verplicht'));}
          }
        }
      }
    }else{
    }
    return true;
  }


}
