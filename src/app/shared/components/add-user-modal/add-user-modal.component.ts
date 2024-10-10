import {
  Component,
  ViewChild,
  TemplateRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersComponent } from '../users/users.component';
import { Users } from '../users/users';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent {
  @ViewChild(UsersComponent, { static: true })
  usersComponent!: UsersComponent;
  @Output() newUsersAdded = new EventEmitter<Users>();
  @ViewChild('addUser', { static: true }) addUser?: TemplateRef<any>;

  userForm!: FormGroup;

  item = {
    imageFile: null as File | null,
    imageUrl: '',
    firstName: '',
    lastName: '',
    mobileNum: '',
    email: '',
  };

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z\s]*$/),
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      lastName: [
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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.item.imageFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.item.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  open() {
    this.modalService.open(this.addUser, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  onSubmit() {
    const newUsers: Users = {
      userImg: this.item.imageUrl,
      firstName: this.item.firstName,
      lastName: this.item.lastName,
      mobileNum: this.item.mobileNum,
      email: this.item.email,
    };

    this.newUsersAdded.emit(newUsers);

    console.log('Adding Users:', newUsers);
    this.modalService.dismissAll();
  }
}
