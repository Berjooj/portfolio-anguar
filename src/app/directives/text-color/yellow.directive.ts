import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[textYellow]'
})
export class YellowDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = '#ffa600';
  }

}
