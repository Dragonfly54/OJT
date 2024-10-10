import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-psswword-modal',
  templateUrl: './edit-psswword-modal.component.html',
  styleUrls: ['./edit-psswword-modal.component.scss'],
})
export class EditPsswwordModalComponent {
  @ViewChild('modalPassword', { static: true })
  modalPassword?: TemplateRef<any>;
  modalRef: NgbModalRef | undefined;

  passForm!: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.passForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  open() {
    this.modalRef = this.modalService.open(this.modalPassword, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }

  onSubmit(): void {
    if (this.passForm.invalid) {
      return;
    }
  }
}
