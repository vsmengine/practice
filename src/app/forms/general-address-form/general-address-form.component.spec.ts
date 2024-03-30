import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAddressFormComponent } from './general-address-form.component';

describe('GeneralAddressFormComponent', () => {
  let component: GeneralAddressFormComponent;
  let fixture: ComponentFixture<GeneralAddressFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralAddressFormComponent]
    });
    fixture = TestBed.createComponent(GeneralAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
