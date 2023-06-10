import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() shorten: boolean = false;
  @Input() colorMode: 'white' | 'black' = 'black';
}
