import { useState } from 'react';
import {
  fetchAllCountriesByCapital,
  fetchAllCountriesByCurrency,
  fetchAllCountriesByLanguage,
  fetchAllCountriesByName,
} from '../api/countries.api';

const CountriesSearchForm = () => {
  const [name, setName] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [capital, setCapital] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name) fetchAllCountriesByName(name);
    if (currency) fetchAllCountriesByCurrency(currency);
    if (language) fetchAllCountriesByLanguage(language);
    if (capital) fetchAllCountriesByCapital(capital);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 mx-auto"
    >
      <div className="flex justify-start items-center gap-2">
        <label htmlFor="name" className="text-base font-medium">
          Country name:
        </label>
        <input
          id="name"
          type="text"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
          className="border border gray-300 rounded-md p-2 bg-white w-full"
        />
      </div>

      <div className="flex justify-start items-center gap-2">
        <label htmlFor="currency" className="text-base font-medium">
          Currency:
        </label>
        <input
          id="currency"
          type="text"
          value={currency || ''}
          onChange={(e) => setCurrency(e.target.value)}
          className="border border gray-300 rounded-md p-2 bg-white  w-full"
        />
      </div>

      <div className="flex justify-start items-center gap-2">
        <label htmlFor="language" className="text-base font-medium">
          Language:
        </label>
        <input
          id="language"
          type="text"
          value={language || ''}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border gray-300 rounded-md p-2 bg-white  w-full"
        />
      </div>

      <div className="flex justify-start items-center gap-2">
        <label htmlFor="capital" className="text-base font-medium">
          Capital:
        </label>
        <input
          id="capital"
          type="text"
          value={capital || ''}
          onChange={(e) => setCapital(e.target.value)}
          className="border border gray-300 rounded-md p-2 bg-white w-full"
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="bg-green-500 rounded-md text-white w-full"
        >
          Search!
        </button>
      </div>
    </form>
  );
};

export default CountriesSearchForm;
