import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPsswwordModalComponent } from './edit-psswword-modal.component';

describe('EditPsswwordModalComponent', () => {
  let component: EditPsswwordModalComponent;
  let fixture: ComponentFixture<EditPsswwordModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPsswwordModalComponent]
    });
    fixture = TestBed.createComponent(EditPsswwordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
