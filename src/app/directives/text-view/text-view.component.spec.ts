import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextViewComponent } from './text-view.component';

describe('TextViewComponent', () => {
  let component: TextViewComponent;
  let fixture: ComponentFixture<TextViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextViewComponent]
    });
    fixture = TestBed.createComponent(TextViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
