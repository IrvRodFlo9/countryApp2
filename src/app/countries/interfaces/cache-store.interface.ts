import { Country } from './country.interface';

export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania' | '';

export interface by {
  term: string;
  countries: Country[];
}

export interface byRegion {
  region: Region;
  countries: Country[];
}

export interface cacheStore {
  byCapital: by;
  byCountry: by;
  byRegion: byRegion;
}
