import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-gender-modal',
  templateUrl: './edit-gender-modal.component.html',
  styleUrls: ['./edit-gender-modal.component.scss'],
})
export class EditGenderModalComponent {
  @ViewChild('modalGender', { static: true }) modalGender?: TemplateRef<any>;
  modalRef: NgbModalRef | undefined;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalRef = this.modalService.open(this.modalGender, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }
}
