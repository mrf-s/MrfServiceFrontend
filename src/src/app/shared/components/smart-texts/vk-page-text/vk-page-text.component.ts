import {Component, Input} from '@angular/core';
import {InfoProviderService} from "../../../services/info-provider.service";

@Component({
  selector: 'app-vk-page-text',
  templateUrl: './vk-page-text.component.html',
  styleUrls: ['./vk-page-text.component.scss']
})
export class VkPageTextComponent {
  constructor(protected info: InfoProviderService) {
  }
}
