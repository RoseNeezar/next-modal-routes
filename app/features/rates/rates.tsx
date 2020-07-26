import useSWR from "swr";
import { FC } from "react";

const fetchCurrency = (currencyCode: string) =>
  fetch(
    `https://api.ratesapi.io/api/latest?base=${currencyCode}`
  ).then((response) => response.json());

interface IProps {
  currencyCode: any;
}
const Rates: FC<IProps> = ({ currencyCode }) => {
  const { data, error } = useSWR(currencyCode, fetchCurrency);

  if (error) return <div>No rates today</div>;
  if (!data) return <div>Loading... wait patiently</div>;

  return (
    <div>
      <h2>Rates for {currencyCode}</h2>
      <ul>
        {Object.entries(data.rates).map(([code, rate]) => (
          <li key={code}>
            <strong>{code}:</strong> {rate}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Rates;
