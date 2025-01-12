import { Component, Input } from '@angular/core';
import { NgForOf, NgIf, NgStyle } from '@angular/common';
import { Product } from '../../../models/Product';
import { HighlightDirective } from '../../../customDirectives/highlight.directive';
import { DisableProductDirective } from '../../../customDirectives/disable-product.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    HighlightDirective,
    DisableProductDirective
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input()
  product: Product ;

  calculateDiscount(discountedPrice: number, originalPrice: number){
    return (100 - (discountedPrice / originalPrice * 100)).toFixed(0);
  }

}
