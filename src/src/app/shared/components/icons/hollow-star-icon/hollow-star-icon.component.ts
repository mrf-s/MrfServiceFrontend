import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-hollow-star-icon',
  templateUrl: './hollow-star-icon.component.html',
  styleUrls: ['./hollow-star-icon.component.scss']
})
export class HollowStarIconComponent {

  protected readonly faStar = faStar;
}
