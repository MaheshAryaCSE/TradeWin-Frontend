import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[custom]'
})
export class CustomDirective {
 
  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText="Text is changed by custom Directive.";
 }
}
