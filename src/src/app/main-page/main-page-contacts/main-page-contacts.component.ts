import {Component, OnInit} from '@angular/core';
import {InfoProviderService} from "../../shared/services/info-provider.service";
import {MapFactoryService} from "../../shared/services/map-factory.service";

declare var require: any
const DG: any = require('2gis-maps');

@Component({
  selector: 'app-main-page-contacts',
  templateUrl: './main-page-contacts.component.html',
  styleUrls: ['./main-page-contacts.component.scss']
})
export class MainPageContactsComponent implements OnInit{
  constructor(public info: InfoProviderService, private map: MapFactoryService) {
  }

  ngOnInit(): void {
    // this.map.addMapToHtml('map');
  }
}
