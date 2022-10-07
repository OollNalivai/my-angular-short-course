import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { ProductInterface } from '../../../../../../models/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
          fromObject: {
            limit: 3
          }
        }
      )
    }).pipe(delay(1500));
  }

}
