import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TermsModalComponent } from 'src/app/share/components/terms-modal/terms-modal.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.signupForm = this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [''],
      termsAndConditions: [false, Validators.requiredTrue],
    });
    this.signupForm.setValidators(this.passwordMatchValidator());
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;

      console.log('Form Submitted:', formData);
    }
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const formGroup = control as FormGroup;

      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;

      if (password === confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors(null);
      } else {
        formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
      }
      return null;
    };
  }

  openTermsModal() {
    const modalRef = this.modalService.open(TermsModalComponent, {
      size: 'lg',
    });
  }
}
