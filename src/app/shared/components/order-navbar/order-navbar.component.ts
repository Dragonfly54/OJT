import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-order-navbar',
  templateUrl: './order-navbar.component.html',
  styleUrls: ['./order-navbar.component.scss'],
})
export class OrderNavbarComponent {
  constructor(private authService: AuthService) {}

  back(): void {
    this.authService.backToHome();
  }
}
