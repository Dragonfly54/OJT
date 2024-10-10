import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailModalComponent } from './edit-email-modal.component';

describe('EditEmailModalComponent', () => {
  let component: EditEmailModalComponent;
  let fixture: ComponentFixture<EditEmailModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEmailModalComponent]
    });
    fixture = TestBed.createComponent(EditEmailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
