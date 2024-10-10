import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-phone-modal',
  templateUrl: './edit-phone-modal.component.html',
  styleUrls: ['./edit-phone-modal.component.scss'],
})
export class EditPhoneModalComponent {
  @ViewChild('modalPhone', { static: true }) modalPhone?: TemplateRef<any>;
  modalRef: NgbModalRef | undefined;

  phoneForm!: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phoneNum: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]+$/),
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
    });
  }

  open() {
    this.modalRef = this.modalService.open(this.modalPhone, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }

  onSubmit() {
    if (this.phoneForm.valid) {
      const customer = this.phoneForm.value;
    }
  }
}
