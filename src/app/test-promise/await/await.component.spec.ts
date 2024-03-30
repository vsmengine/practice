import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitComponent } from './await.component';

describe('AwaitComponent', () => {
  let component: AwaitComponent;
  let fixture: ComponentFixture<AwaitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwaitComponent]
    });
    fixture = TestBed.createComponent(AwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
