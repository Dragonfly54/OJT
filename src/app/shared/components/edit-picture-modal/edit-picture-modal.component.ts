import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-picture-modal',
  templateUrl: './edit-picture-modal.component.html',
  styleUrls: ['./edit-picture-modal.component.scss'],
})
export class EditPictureModalComponent {
  @ViewChild('modalPicture', { static: true }) modalPicture?: TemplateRef<any>;
  modalRef: NgbModalRef | undefined;

  item = { imageFile: null as File | null, imageUrl: '' };

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalRef = this.modalService.open(this.modalPicture, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
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
}
