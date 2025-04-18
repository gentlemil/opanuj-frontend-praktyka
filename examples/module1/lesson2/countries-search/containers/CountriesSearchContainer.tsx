// Zaimplementuj funkcjonalność wyszukiwania po nazwie kraju
// Dodaj możliwość filtrowania po nazwie, walucie, języku oraz stolicy
// Wyświetl karty krajów zawierające:

// defaultowo pobieram wszystkie kraje i mapuje je po polach, ktore mnie interesuja
// wyszukiwarka uderza pod inny endpoint

import { useEffect, useState } from 'react';
import CountriesSearchForm from './CountriesSearchForm';
import CountriesSearchList from './CountriesSearchList';
import { fetchAllCountries } from '../api/countries.api';
import type { ICountry } from '../types/Countries';

const CountriesSearchContainer = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCountries();
        setCountries(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return (
    <main className="container w-full h-screen p-4 mx-auto">
      <h1 className="w-full text-2xl/10 text-black font-normal text-center">
        Country Search
      </h1>

      <CountriesSearchForm />

      {loading ? (
        <div>
          <p className="italic opacity-80">loading...</p>
        </div>
      ) : error ? (
        <div>
          <p className="italic opacity-80">{error}</p>
        </div>
      ) : (
        <CountriesSearchList countries={countries} />
      )}
    </main>
  );
};

export default CountriesSearchContainer;
