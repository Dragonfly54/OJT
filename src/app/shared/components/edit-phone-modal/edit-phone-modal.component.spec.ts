import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhoneModalComponent } from './edit-phone-modal.component';

describe('EditPhoneModalComponent', () => {
  let component: EditPhoneModalComponent;
  let fixture: ComponentFixture<EditPhoneModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPhoneModalComponent]
    });
    fixture = TestBed.createComponent(EditPhoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
