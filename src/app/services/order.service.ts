import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  // getOrders() { 
  //   return this.http.get('/api/orders')
  //     .map(response => response.json());
  // }
}
