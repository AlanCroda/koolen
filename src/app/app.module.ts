import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormModule } from './signup-form/signup-form.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, SignupFormModule, HttpClientModule],
  providers: [HttpClient, HttpClientModule],
})
export class AppModule {}
