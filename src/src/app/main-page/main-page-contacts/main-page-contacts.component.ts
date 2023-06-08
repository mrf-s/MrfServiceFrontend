import {Component, OnInit} from '@angular/core';
import {InfoProviderService} from "../../shared/services/info-provider.service";

declare var require: any
const DG: any = require('2gis-maps');

@Component({
  selector: 'app-main-page-contacts',
  templateUrl: './main-page-contacts.component.html',
  styleUrls: ['./main-page-contacts.component.scss']
})
export class MainPageContactsComponent implements OnInit{
  constructor(public info: InfoProviderService) {
  }

  ngOnInit(): void {
    const coordinates = [55.863581, 49.083282];

    const map = DG.map('map', {
      'center': coordinates,
      'zoom': 14
    });

    DG.marker(coordinates).addTo(map);
  }
}
