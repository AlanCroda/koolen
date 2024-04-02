import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor() {}

  signup(formData: any): Observable<any> {
    // TODO: actual API call here
    return of('Signup successful!');
  }
}
