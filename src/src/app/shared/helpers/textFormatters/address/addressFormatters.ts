export interface AddressFormatters {
  cityFormatter: (city: string) => string,
  districtFormatter: (district: string) => string,
  streetFormatter: (street: string) => string,
  houseNumberFormatter: (houseNumber: number) => string,
  doorwayFormatter: (doorway: number) => string,
  floorFormatter: (floor: number) => string,
  doorNumberFormatter: (doorNumber: number) => string,
  fullFormatter: (city: string, district: string, street: string, houseNumber: string, doorway: string, floor: string, doorNumber: string) => string
}

export interface OverrideAddressFormatters {
  cityFormatter?: (city: string) => string,
  districtFormatter?: (district: string) => string,
  streetFormatter?: (street: string) => string,
  houseNumberFormatter?: (houseNumber: number) => string,
  doorwayFormatter?: (doorway: number) => string,
  floorFormatter?: (floor: number) => string,
  doorNumberFormatter?: (doorNumber: number) => string,
  fullFormatter?: (city: string, district: string, street: string, houseNumber: string, doorway: string, floor: string, doorNumber: string) => string
}
