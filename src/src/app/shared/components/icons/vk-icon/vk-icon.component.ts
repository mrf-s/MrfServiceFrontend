import { Component } from '@angular/core';
import {faVk} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-vk-icon',
  templateUrl: './vk-icon.component.html',
  styleUrls: ['./vk-icon.component.scss']
})
export class VkIconComponent {

  protected readonly faVk = faVk;
}
