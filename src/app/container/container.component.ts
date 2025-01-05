import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgForOf, NgIf } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, NgForOf, ProductListComponent, ProductDetailComponent, NgIf],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfNames: string[] = ['Home', 'Mans', 'Omar', 'Ahmed','Rashid'];

  searchText: string = ''

  setSearchText(value: string) {
    this.searchText = value
  }
}
