import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, SignupFormComponent],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'koolen';
}
