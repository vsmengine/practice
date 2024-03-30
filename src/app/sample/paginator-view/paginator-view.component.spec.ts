import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorViewComponent } from './paginator-view.component';

describe('PaginatorViewComponent', () => {
  let component: PaginatorViewComponent;
  let fixture: ComponentFixture<PaginatorViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorViewComponent]
    });
    fixture = TestBed.createComponent(PaginatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
