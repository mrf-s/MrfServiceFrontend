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

  public get hrefPhone(): string {
    return `tel:${this._phoneNumber}`;
  }

  public get formattedPhoneNumber(): string {
    return this._formattedPhoneNumber;
  }

  public get email(): string {
    return 'mr.farakhov@vk.com';
  }

  public get yandexMapsUrl(): string {
    return 'https://yandex.ru/profile/-/CCU0vPqDxD';
  }

  public get twoGisMapsUrl(): string {
    return 'https://go.2gis.com/8gxzs';
  }

  public get googleMapsUrl(): string {
    return 'https://goo.gl/maps/688WuhAkutpjjTox7';
  }

  public get vkUrl(): string {
    return 'https://vk.com/mr.farakhov';
  }

  public get vkNickName(): string {
    return 'MR.Farakhov';
  }

  public get telegramUrl(): string {
    return 'https://t.me/MRFServiceStore';
  }

  public get telegram(): string {
    return '@MRFServiceStore';
  }

  public get whatsUpUrl(): string {
    return 'https://wa.me/79377748577';
  }

  public get address(): string {
    return 'г. Казань, ул. Чапаева, Авиастроительный район, дом 16, подъезд 1, домофон 10В, этаж 3, квартира 10 (Перед Вашим приходом, просьба позвонить)'
  }

  public get workTime(): string {
    return 'Ежедневно с 10:00 до 00:00, без выходных';
  }
}
