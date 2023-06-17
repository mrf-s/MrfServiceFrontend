import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl: string = environment.gatewayUrl;

  constructor(private http: HttpClient) {

  }

  public orderCall(name: string, number: number, model: string | null = null, whatsWrong: string | null = null): Observable<any> {
    return this.http.post(`${this.baseUrl}order-call`, {name, number, model, whatsWrong});
  }
}
