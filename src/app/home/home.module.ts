import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { MainModule } from '../features/main/main.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([{ path: 'home', component: HomeComponent }]),
    CommonModule,
    ShareModule,
    MainModule,
  ],
})
export class HomeModule {}
