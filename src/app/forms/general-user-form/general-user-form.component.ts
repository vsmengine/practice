import { Component } from '@angular/core';
import { IAddressForm, IUserForm } from '../Interfaces/form';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-general-user-form',
  templateUrl: './general-user-form.component.html',
  styleUrls: ['./general-user-form.component.scss']
})
export class GeneralUserFormComponent {

  userFormModel: IUserForm = {
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      city: '',
      zipcode: '',
    }
  }

  public onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log("&&&&&&&", form)
  }

}
