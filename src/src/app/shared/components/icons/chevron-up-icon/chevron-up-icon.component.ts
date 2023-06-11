import { Component } from '@angular/core';
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-chevron-up-icon',
  templateUrl: './chevron-up-icon.component.html',
  styleUrls: ['./chevron-up-icon.component.scss']
})
export class ChevronUpIconComponent {

  protected readonly faChevronUp = faChevronUp;
}
