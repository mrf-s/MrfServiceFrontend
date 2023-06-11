import { Component } from '@angular/core';
import {faYandex} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-yandex-icon',
  templateUrl: './yandex-icon.component.html',
  styleUrls: ['./yandex-icon.component.scss']
})
export class YandexIconComponent {

  protected readonly faYandex = faYandex;
}
