import { Component, ViewChild } from '@angular/core';
import { EditPictureModalComponent } from '../edit-picture-modal/edit-picture-modal.component';
import { EditNameModalComponent } from '../edit-name-modal/edit-name-modal.component';
import { EditGenderModalComponent } from '../edit-gender-modal/edit-gender-modal.component';
import { EditPsswwordModalComponent } from '../edit-psswword-modal/edit-psswword-modal.component';
import { EditEmailModalComponent } from '../edit-email-modal/edit-email-modal.component';
import { EditPhoneModalComponent } from '../edit-phone-modal/edit-phone-modal.component';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.scss'],
})
export class AdminControlComponent {
  @ViewChild(EditPictureModalComponent, { static: true })
  modalPicture!: EditPictureModalComponent;
  @ViewChild(EditNameModalComponent, { static: true })
  modalName!: EditNameModalComponent;
  @ViewChild(EditGenderModalComponent, { static: true })
  modalGender!: EditGenderModalComponent;
  @ViewChild(EditPsswwordModalComponent, { static: true })
  modalPassword!: EditGenderModalComponent;
  @ViewChild(EditEmailModalComponent, { static: true })
  modalEmail!: EditEmailModalComponent;
  @ViewChild(EditPhoneModalComponent, { static: true })
  modalPhone!: EditPhoneModalComponent;

  openModalPicture() {
    this.modalPicture.open();
  }

  openModalName() {
    this.modalName.open();
  }

  openModalGender() {
    this.modalGender.open();
  }

  openModalPassword() {
    this.modalPassword.open();
  }

  openModalEmail() {
    this.modalEmail.open();
  }

  openModalPhone() {
    this.modalPhone.open();
  }
}
