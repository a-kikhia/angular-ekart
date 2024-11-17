import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  mainManuItems: string[] = ['Home', 'Products', 'Sale', 'New Arrival','Contact', 'Services'];
}
