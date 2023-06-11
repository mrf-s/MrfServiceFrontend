import { Component } from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-solid-star-icon',
  templateUrl: './solid-star-icon.component.html',
  styleUrls: ['./solid-star-icon.component.scss']
})
export class SolidStarIconComponent {

  protected readonly faStar = faStar;
}
