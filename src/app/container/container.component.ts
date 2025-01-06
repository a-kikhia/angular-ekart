import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgForOf, NgIf } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, NgForOf, ProductListComponent, ProductDetailComponent, NgIf, FeaturedBrandsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfNames: string[] = ['Home', 'Mans', 'Omar', 'Ahmed','Rashid'];

  searchText: string = ''

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  setSearchText(value: string) {
    this.searchText = value
  }
}
