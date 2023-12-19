import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  rememberMe: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      const isAuthenticated = this.authService.authenticate(credentials);

      if (isAuthenticated) {
        const rememberMe = this.loginForm.get('rememberMe')?.value;

        if (this.rememberMe) {
          const token = this.authService.generateToken(credentials);
          this.authService.setToken(token);
        }

        console.log('User Authenticated', credentials);
      } else {
        console.log('Invalid Credentials');
      }
    }
  }

  onLoginButtonClick() {
    this.router.navigate(['/home']);
  }
}
