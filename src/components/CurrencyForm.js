import React from "react";
import { Amount } from "./Amount";
import { CurrencySelector } from "./CurrencySelector";
import { CurrencySwitcher } from "./CurrencySwitcher";

const getSorted = (arrayToSort) => arrayToSort.sort((a, b) => a[0].localeCompare(b[0]));

const getCurrencyOptions = (base, rates) => {
  const ratesWithBase = Object.keys(rates).concat(base);
  const sorted = getSorted(ratesWithBase);
  return sorted.map(s => ({ label: s, value: s.toLowerCase() }));
};

export class CurrencyForm extends React.Component {
  static displayName = "CurrencyForm";
  state = {
    amount: 1,
    from: undefined,
    to: undefined,
    value: undefined,
    // error: undefined,
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("submitted: ", this.state.value);
  }

  onChangeAmount = (event) => {
    console.log("onChangeAmount: ", event.target.value);
    // const newAmount = event.target.value;
    // if (newAmount && !Number(newAmount)) {
    //   this.setState({ error: <strong>The amount must be a number</strong> });
    // }
    this.setState({ amount: event.target.value });
  }

  onChangeFrom = (val) => {
    console.log("onChangeFrom: ", val);
    this.setState({ from: val });
  }

  onChangeTo = (val) => {
    console.log("onChangeTo: ", val);
    this.setState({ to: val });
  }

  onSwitch = () => {
    console.log("onSwitch");
    const { from, to } = this.props;
    this.setState({ from: to, to: from });
  }
  
  render() {
    const { amount, from, to } = this.state;
    const { rates, base } = this.props;
    
    // const sortedRates = getSorted(Object.entries(rates));
    const currencyOptions = getCurrencyOptions(base, rates);

    const errorClass = !!amount ? "" : "has-error" ;

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <Amount className={errorClass} value={amount} onChange={this.onChangeAmount} />
          <CurrencySelector
            label="From"
            options={currencyOptions}
            value={from}
            onChange={this.onChangeFrom}
          />
          <CurrencySwitcher value={{ from, to }} onChange={this.onSwitch} />
          <CurrencySelector
            label="To"
            options={currencyOptions}
            value={to}
            onChange={this.onChangeTo}
          />
          <input className="button" type="submit" value="Submit" />

          <label>
            <div className="label">Result:</div>
            <input className="result" type="text" value={this.state.value} onChange={undefined} disabled />
          </label>
        </form>

        {/* just temporary to see entire data */}
        {/* <div key={base} className="currency">
          <div className={`currency-flag currency-flag-${base.toLowerCase()}`}></div>
          <div className="currency-code">{`${base}: 1.0000`}</div>
        </div>
        <div>{
          sortedRates.map((entry) => {
              const [key, val] = entry;
              return <div key={key} className="currency">
                <div className={`currency-flag currency-flag-${key.toLowerCase()}`}></div>
                <div className="currency-code">{`${key}: ${val}`}</div>
              </div>
            })
          }
        </div> */}
      </>
    );
  }
}
