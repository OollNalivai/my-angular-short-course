import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '../../../../../models/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductInterface | undefined

  details = false

  constructor() { }

  ngOnInit(): void {
  }

  changeDetails() {
    this.details = !this.details
  }
}
