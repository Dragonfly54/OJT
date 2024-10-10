import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-name-modal',
  templateUrl: './edit-name-modal.component.html',
  styleUrls: ['./edit-name-modal.component.scss'],
})
export class EditNameModalComponent {
  @ViewChild('modalName', { static: true }) modalName?: TemplateRef<any>;
  modalRef: NgbModalRef | undefined;

  nameForm!: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.nameForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z\s]*$/),
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  open() {
    this.modalRef = this.modalService.open(this.modalName, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }

  onSubmit() {
    if (this.nameForm.valid) {
      const customer = this.nameForm.value;
    }
  }
}
