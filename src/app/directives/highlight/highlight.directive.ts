import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() isHighlight: boolean = false;
  // @Input() highlightText: string = '';
  // @Input() highlightColor: string = 'yellow';
  // private originalHTML = '';

  @HostBinding('style.background-color') bg!: string;
  @HostBinding('class.active') active!: boolean;
  @HostBinding('class.highlight') get hasHighlight() { return this.isHighlight; };
  @HostBinding('class') get class() { return 'class1 class2'; }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['highlightText'].firstChange) {
    //   this.originalHTML = this.el.nativeElement.innerHTML;
    //   return;
    // }
    // const { currentValue } = changes['highlightText'];
    // if (currentValue) {
    //   const regExp = new RegExp(`(${currentValue})`,'gi')
    //   this.el.nativeElement.innerHTML = this.originalHTML.replace(regExp, `<span style="background-color: ${this.highlightColor}">hellooooo</span>`)
    // } else {
    //   this.el.nativeElement.innerHTML = this.originalHTML;
    // }
  }

  @HostListener('mouseover') mouseOver() {
    this.bg = '#cccccc';
    this.active = true;

    const hiElem = this.el.nativeElement.querySelector('.hi');
    const newElem = this.renderer.createElement('span');
    this.renderer.setProperty(newElem, 'innerHTML', 'hiiiiii2')
    this.renderer.appendChild(hiElem, newElem);
    this.renderer.setStyle(hiElem, 'display', 'block');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.bg = '';
    this.active = false;

    const hiElem = this.el.nativeElement.querySelector('.hi');
    this.renderer.setStyle(hiElem, 'display', 'none');
  }
}
