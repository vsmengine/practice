import { Component } from '@angular/core';
import { IUserForm } from '../Interfaces/form';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user-form',
  templateUrl: './reactive-user-form.component.html',
  styleUrls: ['./reactive-user-form.component.scss']
})
export class ReactiveUserFormComponent {

  userFormGroup!: FormGroup;
  isSubmitted = false;

  get getNameCtrl() { return this.userFormGroup.get('name') };
  get getusernameCtrl() { return this.userFormGroup.get('username') };
  get getEmailCtrl() { return this.userFormGroup.get('email') };

  constructor(
    private fb: FormBuilder
  ) {
    this.userFormGroup = fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  public onSubmit() {
    this.isSubmitted = true;
    // if (!this.userFormGroup.valid) {
    //   return;
    // }
    console.log("&&&&&&&", this.userFormGroup)
  }
  
}
