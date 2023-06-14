import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appParallax][initialPosition]'
})
export class ParallaxDirective {
  @Input() ratio: number = 0.5;
  @Input() initialPosition!: number;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    this.update();
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    this.update();
  }

  private update(): void {
    this.el.nativeElement.style.backgroundPositionY = (this.initialPosition + (window.scrollY * this.ratio)) + 'px';
  }

  private get halfHeight(): number {
    return this.el.nativeElement.getBoundingClientRect().height / 2;
  }
}
