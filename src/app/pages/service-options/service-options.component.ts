import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-options',
  templateUrl: './service-options.component.html',
  styleUrls: ['./service-options.component.scss'],
})
export class ServiceOptionsComponent {
  selectedOption: string | null = null;

  constructor(private router: Router) {}

  selectOption(option: string) {
    this.selectedOption = option;
  }

  confirmOption() {
    this.router.navigate(['/order'], {
      queryParams: { option: this.selectedOption },
    });
  }
}
