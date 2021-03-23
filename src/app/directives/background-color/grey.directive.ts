import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[colorGrey]'
})
export class GreyDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#5e61ff';
    el.nativeElement.style.backgroundImage = 'linear-gradient(to right, #cd4fff , #5e61ff)';
  }

}
