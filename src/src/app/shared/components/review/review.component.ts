import {Component, Input} from '@angular/core';
import {ReviewModel} from "./review-model";

@Component({
  selector: 'app-review[review]',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review!: ReviewModel;
}
