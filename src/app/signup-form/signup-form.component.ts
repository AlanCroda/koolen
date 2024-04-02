import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  imports: [NgIf, FormsModule],
  standalone: true,
})
export class SignupFormComponent {
  constructor(private signupService: SignupService) {}

  submitForm(signupForm: NgForm) {
    console.log(signupForm.controls);
    if (signupForm.valid) {
      this.signupService.signup(signupForm.value).subscribe(
        (response) => {
          console.log(response);
          signupForm.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error(error); // Handle error if any
        }
      );
    }
  }
}
