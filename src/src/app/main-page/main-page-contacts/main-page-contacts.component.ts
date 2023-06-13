import {Component, OnInit} from '@angular/core';
import {InfoProviderService} from "../../shared/services/info-provider.service";
import {MapFactoryService} from "../../shared/services/map-factory.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

declare var require: any
const DG: any = require('2gis-maps');

@Component({
  selector: 'app-main-page-contacts',
  templateUrl: './main-page-contacts.component.html',
  styleUrls: ['./main-page-contacts.component.scss']
})
export class MainPageContactsComponent implements OnInit{
  constructor(public info: InfoProviderService, private map: MapFactoryService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    // this.map.addMapToHtml('map');
  }

  protected openModal(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: "lg" });
  }
}
