import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralUserFormComponent } from './general-user-form.component';

describe('GeneralUserFormComponent', () => {
  let component: GeneralUserFormComponent;
  let fixture: ComponentFixture<GeneralUserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralUserFormComponent]
    });
    fixture = TestBed.createComponent(GeneralUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
