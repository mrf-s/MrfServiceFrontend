import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoProviderService {
  private _phoneNumber: string = '+79377748577';
  private _formattedPhoneNumber: string = '+7 (937) 774-85-77'

  public get phoneNumber(): string {
    return this._phoneNumber;
  }

  public get formattedPhoneNumber(): string {
    return this._formattedPhoneNumber;
  }

  public get email(): string {
    return 'mr.farakhov@vk.com';
  }

  public get address(): string {
    return 'Казань, Авиастроительный район, ул. Чапаева 16, подъезд 1, этаж 3, квартира 10'
  }
}
