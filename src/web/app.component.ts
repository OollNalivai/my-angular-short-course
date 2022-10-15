import { Component, OnInit } from '@angular/core';
import { ProductsService } from './shared/services/products.service';
import { ModalService } from './shared/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  text = ''

  title = 'my-angular-short-course';
  loading = false

  constructor(public productsService: ProductsService,
              public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true

    this.productsService.getAll().subscribe( () => {
      this.loading = false
    })
  }

}
