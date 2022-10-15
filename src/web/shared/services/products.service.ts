import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, tap, throwError } from 'rxjs';
import { ProductInterface } from '../../../models/interfaces/product.interface';
import { ErrorService } from './error.service';
import { environment } from '../../../environments/environment.prod';
import { products } from '../../data/productrs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  products: ProductInterface[] = [];

  getAll(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(environment.productsData, {
      params: new HttpParams({
          fromObject: {
            limit: 3
          }
        }
      )
    }).pipe(
      delay(1500),
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this)),
      tap(() => console.log(products))
    );
  }

  create(product: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(environment.productsData, product)
      .pipe(
        tap(product => {
          this.products.push(product);
          console.log(this.products);
        })
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }

}
