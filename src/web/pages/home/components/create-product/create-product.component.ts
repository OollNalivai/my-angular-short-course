import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../../shared/services/products.service';
import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(private productService: ProductsService,
              private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  get title() {
    return this.form.controls.title as FormControl;
  }

  submit() {
    console.log(this.title);
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }).subscribe(() => {
        this.modalService.closeModal()
    });
  }
}
