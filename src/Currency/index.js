import "./style.css";

const Currency = ({ title, currencies, currency, setCurrency, exchangeRate }) => (
  <p>
    <label>
      <span className="title">{title}</span>
      <select
        className="currency"
        onClick={exchangeRate}
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}
      >
        {currencies.map(currency => (
          <option key={currency.rate} value={currency.rate}>
            {currency.name}
          </option>
        ))}
      </select>
    </label>
  </p>
);

export default Currency;