import {Observable} from "rxjs";
import {ReviewModel} from "../components/review/review-model";

export interface ReviewsProvider {
  getReviews(): Observable<ReviewModel[]>;
}
