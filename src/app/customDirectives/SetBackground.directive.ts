import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[setBackground]'
})
export class SetBackground implements OnInit{

  // private element: ElementRef;

  // @Input()
  // backgroundColor: string = '#36454F'
  // @Input()
  // textColor: string = 'white'
  //
  @Input('setBackground')
  changeTextAnBackColor: {backgroundColor: string, textColor: string}

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element = element;
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = '#36454F';
    // this.element.nativeElement.style.color = 'white';
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAnBackColor.backgroundColor);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAnBackColor.textColor);
    // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example Title');
  }
}
