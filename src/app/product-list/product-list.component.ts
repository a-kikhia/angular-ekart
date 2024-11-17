import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // name = 'Befo Kik';
  addToCart: number = 0;
  product = {
    name: 'Iphone 13',
    price: 999,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: 'assets/images/iphone.jpeg',
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  onNamechange(event: any) {
    // this.name = event.target.value;
  }

  incerementValueInCart(){
    if(this.addToCart < this.product.inStock)
      this.addToCart++;
  }
  
  decrementValueInCart(){
   if(this.addToCart > 0 )
     this.addToCart--;
  }


}
