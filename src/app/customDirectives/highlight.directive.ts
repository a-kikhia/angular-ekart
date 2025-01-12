import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input()
  isInInventory: boolean

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  OnMouseEnter(){
    if (this.isInInventory){
      this.renderer.addClass(this.element.nativeElement, 'highlight-product');
    }
  }

  @HostListener('mouseleave')
  OnMouseLeave(){
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product');
  }
}
