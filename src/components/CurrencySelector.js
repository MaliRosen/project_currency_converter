import React from "react";
import Select, { components } from "react-select";
import { SelectCustomOption } from "./SelectCustomOption";

const { Option, SingleValue } = components;

const SelectIconOption = (props) => (
  <Option {...props}>
    <SelectCustomOption {...props.data} />
  </Option>
);

const SelectValueOption = (props) => (
  <SingleValue {...props}>
    <SelectCustomOption {...props.data} />
  </SingleValue>
);

export class CurrencySelector extends React.Component {
  static displayName = "CurrencySelector";
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.props.onChange(selectedOption);
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;
    const { label, options = [], value } = this.props;

    return (
      <label>
        <div className="label">{`${label}:`}</div>
        <Select
          className="react-select-container"
          isClearable={true}
          value={value || selectedOption}
          onChange={this.handleChange}
          options={options}
          components={{
            Option: SelectIconOption,
            SingleValue: SelectValueOption,
          }}
          theme={theme => ({
            ...theme,
            borderRadius: 2,
            colors: {
              ...theme.colors,
              primary50: 'gold',
              primary25: 'gold',
              primary: 'gold',
              neutral60: 'black',
              neutral40: 'darkslategray',
              neutral30: 'darkslategray',
              neutral20: 'darkslategray',
            },
          })}
        />
      </label>
    );
  }
}
