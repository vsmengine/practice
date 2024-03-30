import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAddressForm, IUserForm } from '../Interfaces/form';
import { ControlContainer, NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-general-address-form',
  templateUrl: './general-address-form.component.html',
  styleUrls: ['./general-address-form.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgModelGroup
  }]
})
export class GeneralAddressFormComponent {

  //[(address)]
  @Input() address?: IAddressForm;
  @Output() addressChange = new EventEmitter<IAddressForm>();

  @Input() formModel?: NgForm

  public emitChange() {
    this.addressChange.emit(this.address);
  }
}
