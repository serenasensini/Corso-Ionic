import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClickDirective]'
})
export class ClickDirectiveDirective {

  constructor(public element: ElementRef, public renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  handleClick(event) {
    console.log('Element has been clicked');
    this.renderer.setStyle(this.element.nativeElement, 'opacity', 0);
  }

}
