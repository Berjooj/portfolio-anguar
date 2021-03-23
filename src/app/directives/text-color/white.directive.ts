import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[textWhite]'
})
export class WhiteDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.color = 'white';
  }

}
