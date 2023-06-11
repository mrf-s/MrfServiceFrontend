import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {
  @Input() stars: number = 5;
  @Input() starsMax: number = 5;

  protected get fullStars(): number {
    return Math.max(0, Math.floor(this.stars));
  }

  protected get isSemistarred(): boolean {
    return this.stars - this.fullStars >= 0.5;
  }

  protected get hollowStars(): number {
    if (this.starsMax === -1) {
      return 0;
    }

    let hollowStars = this.starsMax - this.fullStars;
    if (this.isSemistarred) {
      hollowStars--;
    }

    return Math.max(0, Math.floor(hollowStars));
  }

  protected asRange(rangeLength: number): number[] {
    return Array(rangeLength).fill(0).map((_, index) => index);
  }
}
