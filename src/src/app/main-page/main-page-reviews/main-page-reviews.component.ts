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
  owlCarouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    autoWidth: true,
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

  constructor(@Inject('ReviewsProvider') reviewsProvider: ReviewsProvider) {
    reviewsProvider.getReviews().subscribe(r => {
      this.reviews = r;
    })
  }
}
