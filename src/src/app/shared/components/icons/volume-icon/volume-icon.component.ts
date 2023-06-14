import { Component } from '@angular/core';
import {faVolumeHigh} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-volume-icon',
  templateUrl: './volume-icon.component.html',
  styleUrls: ['./volume-icon.component.scss']
})
export class VolumeIconComponent {

  protected readonly faVolumeHigh = faVolumeHigh;
}
