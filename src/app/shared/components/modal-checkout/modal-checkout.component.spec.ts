import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCheckoutComponent } from './modal-checkout.component';

describe('ModalCheckoutComponent', () => {
  let component: ModalCheckoutComponent;
  let fixture: ComponentFixture<ModalCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCheckoutComponent]
    });
    fixture = TestBed.createComponent(ModalCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
