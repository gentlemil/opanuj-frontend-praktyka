import type { ICountry } from '../types/Countries';

interface CountriesSearchListProps {
  countries: ICountry[];
}

const CountriesSearchList = ({ countries }: CountriesSearchListProps) => {
  return <div>{countries.length}</div>;
};

export default CountriesSearchList;
