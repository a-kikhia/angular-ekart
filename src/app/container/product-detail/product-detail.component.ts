import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input()
  productListComp: ProductListComponent = undefined;

  product: Product;

   ngOnInit(){
     this.product = this.productListComp.selectedProduct;
   }

}
