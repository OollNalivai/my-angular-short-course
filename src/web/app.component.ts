import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../models/interfaces/product.interface';
import { ProductsService } from './shared/services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  text = ''

  title = 'my-angular-short-course';
  // products: ProductInterface[] = []
  loading = false
  products$: Observable<ProductInterface[]> | undefined

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true

    this.products$ = this.productsService.getAll().pipe(
      tap(
        () => this.loading = false
      )
    )

    // this.productsService.getAll().subscribe( products => {
    //   console.log(products)
    //   this.products = products
    //   this.loading = false
    // })
  }

}
