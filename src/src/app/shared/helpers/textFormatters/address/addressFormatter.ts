import {AddressFields} from "./addressFields";
import {AddressFormatters, OverrideAddressFormatters} from "./addressFormatters";

export class AddressFormatter {
  public formatters: AddressFormatters = {
    cityFormatter: (city: string) => `г. ${city}`,
    districtFormatter: (district: string) => `${district} район`,
    streetFormatter: (street: string) => `ул. ${street}`,
    houseNumberFormatter: (houseNumber: number) => `дом ${houseNumber}`,
    doorwayFormatter: (doorway: number) => `подъезд ${doorway}`,
    floorFormatter: (floor: number) => `этаж ${floor}`,
    doorNumberFormatter: (doorNumber) => `квартира ${doorNumber}`,
    fullFormatter: (city: string, district: string, street: string, houseNumber: string,
                    doorway: string, floor: string, doorNumber: string) => {
      return [city, district, street, houseNumber, doorway, floor, doorNumber].join(', ')
    }
  };

  constructor(overrideFormatters: OverrideAddressFormatters = {}) {
    this.formatters = {...this.formatters, ...overrideFormatters};
  }

  public render(address: AddressFields): string {
    const formatters: AddressFormatters = this.formatters;
    return this.formatters.fullFormatter(
      formatters.cityFormatter(address.city),
      formatters.districtFormatter(address.district),
      formatters.streetFormatter(address.street),
      formatters.houseNumberFormatter(address.houseNumber),
      formatters.doorwayFormatter(address.doorway),
      formatters.floorFormatter(address.floor),
      formatters.doorNumberFormatter(address.doorNumber)
    );
  }

  public overrideFormatters(overrideFormatters: OverrideAddressFormatters): void {
    this.formatters = {...this.formatters, ...overrideFormatters};
  }
}
