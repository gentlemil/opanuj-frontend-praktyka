import CountryCard from '../components/CountryCard';
import type { ICountry } from '../types/Countries';

interface CountriesSearchListProps {
  countries: ICountry[];
}

const CountriesSearchList = ({ countries }: CountriesSearchListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountriesSearchList;
