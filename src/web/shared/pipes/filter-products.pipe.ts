import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from '../../../models/interfaces/product.interface';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: ProductInterface[], text: string): ProductInterface[] {
    return products.filter(p => p.title.toLowerCase().includes((text.toLowerCase())));
  }

}
