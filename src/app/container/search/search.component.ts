import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //1. read: Use it ro read the different token from the queried elements.
  //2. static: Determines when the query is resolved. --> @ViewChild('searchInput',{static: true}) is the same as @ViewChild('searchInput')
  //           True is the view is initialized for the first time.
  //           False if you want to be resolved after every change detection.
  @ViewChild('searchInput')
  searchInputEl: ElementRef;

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }

}
