export interface ICountry {
  name: IName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, ICurrency>;
  idd: IIDD;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  translations: Record<string, ITranslation>;
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Record<string, IDemonym>;
  flag: string;
  maps: IMaps;
  population: number;
  gini: Record<string, number>;
  fifa: string;
  car: ICar;
  timezones: string[];
  continents: string[];
  flags: IMedia;
  coatOfArms: IMedia;
  startOfWeek: string;
  capitalInfo: ICapitalInfo;
  postalCode: IPostalCode;
}

export interface IName {
  common: string;
  official: string;
  nativeName: Record<string, INativeName>;
}

export interface INativeName {
  official: string;
  common: string;
}

export interface ICurrency {
  name: string;
  symbol: string;
}

export interface IIDD {
  root: string;
  suffixes: string[];
}

export interface ITranslation {
  official: string;
  common: string;
}

export interface IDemonym {
  f: string;
  m: string;
}

export interface IMaps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface IMedia {
  png: string;
  svg: string;
  alt?: string;
}

export interface ICar {
  signs: string[];
  side: string;
}

export interface ICapitalInfo {
  latlng: [number, number];
}

export interface IPostalCode {
  format: string;
  regex: string;
}
