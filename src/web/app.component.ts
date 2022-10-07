import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../models/interfaces/product.interface';
import { ProductsService } from './pages/home/components/product/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'my-angular-short-course';
  products: ProductInterface[] = []
  loading = false

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe( products => {
      console.log(products)
      this.products = products
      this.loading = false
    })
  }

}
