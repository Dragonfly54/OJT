import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-email-modal',
  templateUrl: './edit-email-modal.component.html',
  styleUrls: ['./edit-email-modal.component.scss'],
})
export class EditEmailModalComponent {
  @ViewChild('modalEmail', { static: true }) modalEmail?: TemplateRef<any>;
  modalRef: NgbModalRef | undefined;
  emailForm!: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  open() {
    this.modalRef = this.modalService.open(this.modalEmail, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }

  onSubmit(): void {
    if (this.emailForm.invalid) {
      return;
    }
  }
}
