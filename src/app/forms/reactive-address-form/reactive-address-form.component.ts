import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { zipcodeValidator } from '../validators/zipcode.validator';

@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.scss']
})
export class ReactiveAddressFormComponent implements OnInit {

  @Input() isSubmitted = false;

  parentFormGroup!: FormGroup;
  addressFormGroup!: FormGroup;

  get getStreetCtrl() { return this.addressFormGroup.get('street') }
  get getCityCtrl() { return this.addressFormGroup.get('city') }
  get getZipcodeCtrl() { return this.addressFormGroup.get('zipcode') }

  constructor(
    private fb: FormBuilder,
    private controlContainer: ControlContainer
  ) {
    this.addressFormGroup = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', [
        Validators.required,
        zipcodeValidator()
      ]],
    });
  }

  ngOnInit(): void {
    this.parentFormGroup = this.controlContainer.control as FormGroup;
    this.parentFormGroup.addControl('address', this.addressFormGroup);
  }
}
