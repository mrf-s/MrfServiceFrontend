import { Injectable } from '@angular/core';
import {v4 as guid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class GuidService {
  public get guid(): string {
    return guid();
  }
}
