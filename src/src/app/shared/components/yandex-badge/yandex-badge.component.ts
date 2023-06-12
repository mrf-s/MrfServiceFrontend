import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-yandex-badge[theme]',
  templateUrl: './yandex-badge.component.html',
  styleUrls: ['./yandex-badge.component.scss']
})
export class YandexBadgeComponent {
  @Input() theme!: 'dark' | 'light';
}
