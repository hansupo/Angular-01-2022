import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
  private headers =
    {headers:
      new HttpHeaders(
        {
          'Authorization': 
          'Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=='
        }
      )
    }

  constructor(private http: HttpClient) { }

  makePayment(totalPrice: number) {
    const data = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": totalPrice,
      "order_reference": Math.floor(Math.random() * 8999999 + 100000),
      "nonce": "92ddcfab96e34a5f" + Math.floor(Math.random() * 8999999 + 100000) + new Date() ,
      "timestamp": new Date(),
      "customer_url": 'https://www.delfi.ee/'
    }

    return this.http.post<any>(this.url, data, this.headers)
  }
}
