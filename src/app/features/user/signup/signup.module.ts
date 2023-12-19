import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    RouterModule.forChild([{ path: 'signup', component: SignupComponent }]),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SignupModule {}
