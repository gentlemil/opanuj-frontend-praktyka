import type { ICountry } from '../types/Countries';

interface CountryCardProps {
  country: ICountry;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return <div>{country.name.common}</div>;
};

export default CountryCard;
