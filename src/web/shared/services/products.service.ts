import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { ProductInterface } from '../../../models/interfaces/product.interface';
import { ErrorService } from './error.service';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  getAll(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>( environment.productsData, {
      params: new HttpParams({
          fromObject: {
            limit: 3
          }
        }
      )
    }).pipe(delay(1500),
      catchError(this.errorHandler.bind(this))
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }

}
