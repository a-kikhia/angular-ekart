import { Component, EventEmitter, Output } from '@angular/core';
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

  searchText: string = ''

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  updateSearchText(inputEL: HTMLInputElement) {
    this.searchText = inputEL.value
    this.searchTextChanged.emit(this.searchText)
  }

}
