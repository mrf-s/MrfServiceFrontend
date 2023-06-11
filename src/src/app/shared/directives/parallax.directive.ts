import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input('ratio') parallaxRatio: number = 0.5
  initialTop: number = 0

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    this.initialTop = this.el.nativeElement.getBoundingClientRect().height / -2;
    this.update();
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    this.update();
  }

  private update(): void {
    this.el.nativeElement.style.backgroundPositionY = (this.initialTop + (window.scrollY * this.parallaxRatio)) + 'px';
  }
}
