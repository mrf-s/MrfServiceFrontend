import { Component } from '@angular/core';
import {faComputer} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-computer-icon',
  templateUrl: './computer-icon.component.html',
  styleUrls: ['./computer-icon.component.scss']
})
export class ComputerIconComponent {

  protected readonly faComputer = faComputer;
}
