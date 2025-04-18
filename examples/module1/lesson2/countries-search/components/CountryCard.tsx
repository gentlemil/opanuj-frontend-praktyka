import type { ICountry } from '../types/Countries';

interface CountryCardProps {
  country: ICountry;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div
      className="w-full flex flex-col border border-gray-300 rounded-lg shadow-md"
      data-testid="country-card"
    >
      <img
        src={country.flags?.png}
        alt={`${country.name.common} flag`}
        className="w-full max-h-40 object-fit"
      />
      <div className="flex flex-col justify-start items-center">
        <h2 className="text-xl font-semibold mb-2" data-testid="country-name">
          {country.name.common}
        </h2>
        {country.population && (
          <p className="text-gray-600">
            🧑‍🧑‍🧒‍🧒 {country.population.toLocaleString()}
          </p>
        )}
        {country.currencies && (
          <p className="text-gray-600">
            💰 {Object.values(country.currencies)[0].name} (
            {Object.keys(country.currencies)[0]})
          </p>
        )}
        {country.languages && (
          <p className="text-gray-600">
            🗣️ {Object.values(country.languages)[0]}
          </p>
        )}
        {country.capital && (
          <p className="text-gray-600">🏙️ {country.capital[0]}</p>
        )}
      </div>
    </div>
  );
};

export default CountryCard;
