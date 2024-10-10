import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-customer-modal',
  templateUrl: './add-customer-modal.component.html',
  styleUrls: ['./add-customer-modal.component.scss'],
})
export class AddCustomerModalComponent {
  @ViewChild('addCustomer', { static: true }) addCustomer?: TemplateRef<any>;

  customerForm!: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z\s]*$/),
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      phoneNum: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]+$/),
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  open() {
    this.modalService.open(this.addCustomer, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
    }
  }
}
