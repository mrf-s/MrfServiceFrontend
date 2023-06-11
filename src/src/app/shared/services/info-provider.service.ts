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

  public get yandexUrl(): string {
    return 'https://yandex.ru/maps/43/kazan/?ll=49.084323%2C55.863514&mode=poi&poi%5Bpoint%5D=49.083282%2C55.863581&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D15692944546&z=18.04';
  }

  public get twoGisUrl(): string {
    return 'https://2gis.ru/kazan/firm/70000001069599068/49.083262%2C55.863733?m=49.083763%2C55.863639%2F17.92';
  }

  public get vkUrl(): string {
    return 'https://vk.com/mr.farakhov';
  }

  public get telegramUrl(): string {
    return 'https://t.me/Not_Ilya4_4';
  }

  public get telegram(): string {
    return '@Not_Ilya4_4';
  }

  public get whatsUpUrl(): string {
    return 'https://wa.me/79377748577';
  }

  public get address(): string {
    return 'Казань, Авиастроительный район, ул. Чапаева 16, подъезд 1, этаж 3, квартира 10'
  }

  public get workTime(): string {
    return 'Ежедневно с 10:00 до 24:00';
  }
}
