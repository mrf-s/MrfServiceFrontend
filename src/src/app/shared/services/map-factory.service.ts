import { Injectable } from '@angular/core';
declare var require: any
const DG: any = require('2gis-maps');

@Injectable({
  providedIn: 'root'
})
export class MapFactoryService {
  public addMapToHtml(elementId: string): void {
    const coordinates = [55.863581, 49.083282];

    const map = DG.map(elementId, {
      'center': coordinates,
      'zoom': 14
    });

    DG.marker(coordinates).addTo(map);
  }
}
