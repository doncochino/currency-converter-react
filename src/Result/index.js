import { Title } from "../GlobalStyle.js"
import { Button, TargetAmount } from "./styled.js";

const Result = ({ data, title, rate, result }) => (
    <>
        {data.status === "content" && (
            <p>
                <Title>
                    {title}
                    <strong>{rate.toFixed(2)}</strong>
                </Title>
                <Button>Przelicz</Button>
                <TargetAmount>
                    {result ? `
                        ${result.inputAmount.toFixed(2)}
                        ${result.inputCurrency} 
                        =
                        ${result.outputAmount.toFixed(2)} 
                        ${result.outputCurrency}` : null}
                </TargetAmount>
            </p>
        )}
    </>
);

export default Result;