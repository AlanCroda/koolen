import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor() {}

  signup(formData: NgForm): Observable<any> {
    // TODO: Handle formData and pass values to API call
    return of('Signup successful!');
  }
}
