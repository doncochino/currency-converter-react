import "./style.css";

const Result = ({ title, result }) => (
    <p>
        <span className="title">{title}</span>
        <p className="result">
            {result ? `${result.resultAmount.toFixed(2)} ${result.symbolCurrency}` : null}
        </p>
    </p>
)

export default Result;