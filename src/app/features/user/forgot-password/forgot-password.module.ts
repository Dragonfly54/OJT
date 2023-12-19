import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    RouterModule.forChild([
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ]),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ForgotPasswordModule {}
