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
import {ServiceCenterPageSectionComponent} from "../service-center-page-section/service-center-page-section.component";

@Component({
  selector: 'app-service-center-page-reviews',
  templateUrl: './service-center-page-reviews.component.html',
  styleUrls: ['./service-center-page-reviews.component.scss']
})
export class ServiceCenterPageReviewsComponent {
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

  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
  }

  constructor(@Inject('ReviewsProvider') reviewsProvider: ReviewsProvider) {
    reviewsProvider.getReviews().subscribe(r => {
      this.reviews = r;
    })
  }
}
