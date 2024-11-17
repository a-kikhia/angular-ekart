import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgForOf } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, NgForOf, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfNames: string[] = ['Home', 'Mans', 'Omar', 'Ahmed','Rashid'];
}
