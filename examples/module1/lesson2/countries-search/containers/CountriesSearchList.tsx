import { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import type { ICountry } from '../types/Countries';

interface CountriesSearchListProps {
  countries: ICountry[];
}

const CountriesSearchList = ({ countries }: CountriesSearchListProps) => {
  const [page, setPage] = useState<number>(1);

  const [total, setTotal] = useState<number>(0);
  const [pages, setPages] = useState<number>(1);

  const [result, setResult] = useState<ICountry[]>();

  const pageSize = 10;

  useEffect(() => {
    const totalCountries = countries.length;
    setTotal(totalCountries);
    setPages(Math.ceil(totalCountries / pageSize));
  }, [countries]);

  const goToNextPage = () => {
    if (page === pages) {
      return;
    }
    setPage(page + 1);
  };

  const goToPrevPage = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  useEffect(() => {
    const data = countries.slice(
      page === 1 ? 0 : page * pageSize - pageSize,
      page * pageSize
    );
    setResult(data);
  }, [page, countries]);

  if (!result) {
    return <div>No countries found</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {result.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
      <div className="flex justify-end items-center gap-4">
        <button
          disabled={page === 1}
          onClick={goToPrevPage}
          className="bg-white border border-gray-200 rounded-md px-4 py-2"
        >
          Prev
        </button>
        <button
          disabled={page === pages}
          onClick={goToNextPage}
          className="bg-white border border-gray-200 rounded-md px-4 py-2"
        >
          Next
        </button>
        <p>
          Page {page} of {pages}
        </p>
      </div>
    </div>
  );
};

export default CountriesSearchList;
