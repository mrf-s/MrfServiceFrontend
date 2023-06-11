import {
  AfterViewInit,
  Component, ComponentRef,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {asArray} from "../../shared/helpers/ngfor-array-helpers";
import {ReviewModel} from "../../shared/components/review/review-model";
import {ReviewsProvider} from "../../shared/services/reviews-provider";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ChevronUpIconComponent} from "../../shared/components/icons/chevron-up-icon/chevron-up-icon.component";
import {MainPageSectionComponent} from "../main-page-section/main-page-section.component";

@Component({
  selector: 'app-main-page-reviews',
  templateUrl: './main-page-reviews.component.html',
  styleUrls: ['./main-page-reviews.component.scss']
})
export class MainPageReviewsComponent {
  private anchor: number = 0;
  owlCarouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    navText: ["<div id='right' class='nav-btn prev-slide fa-chevron-left app-primary-interactive'></div>","<div class='nav-btn next-slide fa-chevron-right app-primary-interactive'></div>"],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    },
    nav: false
  }
  reviews: ReviewModel[] = [];
  threeReviews: ReviewModel[] = [];
  twoReviews: ReviewModel[] = [];
  oneReview: ReviewModel[] = [];

  constructor(@Inject('ReviewsProvider') reviewsProvider: ReviewsProvider) {
    reviewsProvider.getReviews().subscribe(r => {
      this.reviews = r;
      this.calcReviews();
    })
  }

  protected createDate(year: number, month: number, day: number): Date {
    return new Date(year, month, day);
  }

  protected increaseAnchor(): void {
    this.anchor++;
    this.calcReviews();
  }

  protected decreaseAnchor(): void {
    this.anchor--;
    this.calcReviews();
  }

  private calcReviews(): void {
    this.threeReviews = this.sliceReviews(3);
    this.twoReviews = this.sliceReviews(2);
    this.oneReview = this.sliceReviews(1);
  }

  protected sliceReviews(reviewsNumber: number): ReviewModel[] {
    const totalReviews: number = this.reviews.length;
    const normalizedAnchor: number = this.anchor - Math.floor(this.anchor / totalReviews) * totalReviews;
    const firstArray = this.reviews.slice(normalizedAnchor, Math.min(normalizedAnchor + reviewsNumber, totalReviews));

    const leastReviews: number = (normalizedAnchor + reviewsNumber) - totalReviews;
    if (leastReviews > 0) {
      const secondArray = this.reviews.slice(0, Math.min(leastReviews, normalizedAnchor));
      return [...firstArray, ...secondArray];
    } else {
      return firstArray;
    }
  }


  protected readonly asArray = asArray;
}
