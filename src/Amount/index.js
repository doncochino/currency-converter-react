import "./style.css";

const Amount = ({ title, amount, setAmount }) => (
    <label>
        <span className="title">{title}</span>
        <input
            className="amount"
            required type="number"
            step="0.01"
            min="0.01"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
        />
    </label>
);

export default Amount;