import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGenderModalComponent } from './edit-gender-modal.component';

describe('EditGenderModalComponent', () => {
  let component: EditGenderModalComponent;
  let fixture: ComponentFixture<EditGenderModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGenderModalComponent]
    });
    fixture = TestBed.createComponent(EditGenderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
