import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerModalComponent } from './add-customer-modal.component';

describe('AddCustomerModalComponent', () => {
  let component: AddCustomerModalComponent;
  let fixture: ComponentFixture<AddCustomerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCustomerModalComponent]
    });
    fixture = TestBed.createComponent(AddCustomerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
