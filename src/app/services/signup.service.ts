import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface CalculateTotalResponse {
  totalAmount: number;
  orderId: number;
}

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private productMap: { [key: string]: number } = {
    'Product 1': 1,
    'Product 2': 2,
    'Product 3': 3,
  };

  constructor(private http: HttpClient) {}

  signup(formData: any): Observable<CalculateTotalResponse> {
    // Map product name to its corresponding value
    formData['product'] = this.productMap[formData['product']];

    let data = {
      productId: formData['product'],
      quantity: formData['quantity'],
    };

    return this.http
      .post<CalculateTotalResponse>(
        'https://localhost:7279/api/orders/calculate-total',
        data
      )
      .pipe(
        catchError((error) => {
          console.error('Error:', error);
          return throwError('An error occurred. Please try again later.');
        })
      );
  }
}
