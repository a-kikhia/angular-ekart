import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[setBackground]'
})
export class SetBackground implements OnInit{

  // private element: ElementRef;

  constructor(private element: ElementRef) {
    // this.element = element;
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = '#36454F';
    this.element.nativeElement.style.color = 'white';
  }
}
