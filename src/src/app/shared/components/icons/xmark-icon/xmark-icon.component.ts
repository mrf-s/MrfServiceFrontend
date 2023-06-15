import { Component } from '@angular/core';
import {faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-xmark-icon',
  templateUrl: './xmark-icon.component.html',
  styleUrls: ['./xmark-icon.component.scss']
})
export class XmarkIconComponent {

  protected readonly faXmark = faXmark;
}
