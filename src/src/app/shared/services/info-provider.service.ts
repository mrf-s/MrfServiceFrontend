import {Injectable} from '@angular/core';
import {AddressFields} from "../helpers/textFormatters/address/addressFields";
import {AddressFormatter} from "../helpers/textFormatters/address/addressFormatter";

@Injectable({
  providedIn: 'root'
})
export class InfoProviderService {
  private _phoneNumber: string = '+79377748577';
  private _formattedPhoneNumber: string = '+7 (937) 774-85-77'
  private _address: AddressFields = {
    city: 'Казань',
    district: 'Авиастроительный',
    street: 'Чапаева',
    houseNumber: 16,
    doorway: 1,
    floor: 3,
    doorNumber: 10
  }
  private _defaultAddressFormatter: AddressFormatter = new AddressFormatter();

  public get phoneNumber(): string {
    return this._phoneNumber;
  }

  public get hrefPhone(): string {
    return `tel:${this._phoneNumber}`;
  }

  public get formattedPhoneNumber(): string {
    return this._formattedPhoneNumber;
  }

  public get siteUrl(): string {
    return 'mrf-s.ru';
  }

  public get siteUrlWww(): string {
    return `www.${this.siteUrl}`;
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

  public addressRender(addressFormatter: AddressFormatter = this._defaultAddressFormatter): string {
    return addressFormatter.render(this.address);
  }

  public get address(): AddressFields {
    return this._address;
  }

  public get workTime(): string {
    return 'Ежедневно с 10:00 до 00:00, без выходных';
  }
}

