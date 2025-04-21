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

  const handleSortResults = (type: 'asc' | 'desc') => {
    const sortedCountries = [...countries].sort((a, b) => {
      if (type === 'asc') {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b.name.common.localeCompare(a.name.common);
      }
    });
    setCountries(sortedCountries);
  };

  const handleSearchResults = (results: ICountry[]) => {
    setCountries(results);
  };

  return (
    <main className="container w-full min-h-screen p-4 mx-auto">
      <h1 className="w-full text-2xl/10 text-black font-normal text-center">
        Country Search
      </h1>

      <CountriesSearchForm
        onSearchResults={handleSearchResults}
        onsSortResults={handleSortResults}
      />

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
