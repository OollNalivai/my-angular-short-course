import { Component } from '@angular/core';
import { ProductInterface } from '../models/interfaces/product.interface';
import { products as data} from './data/productrs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-short-course';

  products: ProductInterface[] = data
}
