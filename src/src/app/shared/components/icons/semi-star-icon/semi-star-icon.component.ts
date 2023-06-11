import { Component } from '@angular/core';
import {faStarHalfStroke} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-semi-star-icon',
  templateUrl: './semi-star-icon.component.html',
  styleUrls: ['./semi-star-icon.component.scss']
})
export class SemiStarIconComponent {

  protected readonly faStarHalfStroke = faStarHalfStroke;
}
