import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-billboard[backgroundImageUrl]',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent {
  @Input() backgroundImageUrl!: string;

  public generateBackgroundImageUrl(): string {
    return `url("${this.backgroundImageUrl}")`;
  }
}
