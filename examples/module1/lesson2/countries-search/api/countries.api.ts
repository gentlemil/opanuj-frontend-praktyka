// Dodaj możliwość filtrowania po nazwie, walucie, języku oraz stolicy

import type { ICountry } from '../types/Countries';

export async function fetchAllCountries(): Promise<ICountry[]> {
  const response = await fetch(`https://restcountries.com/v3.1/all`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No countries found.');
    } else {
      throw new Error('Failed to fetch all countries.');
    }
  }

  return (await response.json()) as ICountry[];
}

// function fetchAllCountriesByName(): Promise<ICountry[]> {}
// function fetchAllCountriesByCurrency(): Promise<ICountry[]> {}
// function fetchAllCountriesByLanguage(): Promise<ICountry[]> {}
// function fetchAllCountriesByCapital(): Promise<ICountry[]> {}
