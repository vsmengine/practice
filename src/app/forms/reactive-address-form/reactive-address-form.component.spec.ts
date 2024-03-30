import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddressFormComponent } from './reactive-address-form.component';

describe('ReactiveAddressFormComponent', () => {
  let component: ReactiveAddressFormComponent;
  let fixture: ComponentFixture<ReactiveAddressFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveAddressFormComponent]
    });
    fixture = TestBed.createComponent(ReactiveAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
