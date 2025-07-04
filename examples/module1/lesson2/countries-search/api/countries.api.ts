// Dodaj możliwość filtrowania po nazwie, walucie, języku oraz stolicy

import { lowerCase } from 'es-toolkit';
import type { ICountry } from '../types/Countries';

/******************************************************************
 * REQUESTS
 ******************************************************************/

export async function fetchAllCountries(): Promise<ICountry[]> {
  const response = await fetch(`https://restcountries.com/v3.1/all`);

  handleError(response);

  return (await response.json()) as ICountry[];
}

export async function fetchAllCountriesByName(
  name: string
): Promise<ICountry[]> {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${lowerCase(name)}`
  );

  handleError(response);

  return (await response.json()) as ICountry[];
}

export async function fetchAllCountriesByCurrency(
  currency: string
): Promise<ICountry[]> {
  const response = await fetch(
    `https://restcountries.com/v3.1/currency/${lowerCase(currency)}`
  );

  handleError(response);

  return (await response.json()) as ICountry[];
}

export async function fetchAllCountriesByLanguage(
  language: string
): Promise<ICountry[]> {
  const response = await fetch(
    `https://restcountries.com/v3.1/lang/${lowerCase(language)}`
  );

  handleError(response);

  return (await response.json()) as ICountry[];
}

export async function fetchAllCountriesByCapital(
  capital: string
): Promise<ICountry[]> {
  const response = await fetch(
    `https://restcountries.com/v3.1/capital/${lowerCase(capital)}`
  );

  handleError(response);

  return (await response.json()) as ICountry[];
}

/******************************************************************
 * HELPERS
 ******************************************************************/

function handleError(response: any): any {
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No countries found.');
    } else {
      throw new Error('Failed to fetch all countries.');
    }
  }
}
