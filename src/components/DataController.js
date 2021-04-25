import React from "react";
import { Error } from "./Error";
import { LoadingIcon } from "./LoadingIcon";
import { CurrencyForm } from "./CurrencyForm";
import { Source } from "./Source";

/*
const mockData = {
  "success": true,
  "timestamp": 1619363044,
  "base": "EUR",
  "date": "2021-04-25",
  "rates": {
    "AED": 4.44353,
    "AFN": 94.5,
    "ALL": 123.2,
    "AMD": 629.68,
    "ANG": 2.1643,
    "AOA": 794.073911,
    "ARS": 112.6813,
    "AUD": 1.561527,
    "AWG": 2.178092,
    "AZN": 2.061318,
    "BAM": 1.95583,
    "BBD": 2.4345,
    "BDT": 102.1258,
    "BGN": 1.9558,
    "BHD": 0.4546,
    "BIF": 2349.859998,
    "BMD": 1.209715,
    "BND": 1.6003,
    "BOB": 8.3256,
    "BRL": 6.6249,
    "BSD": 1.2057,
    "BTC": 0.000024031842,
    "BTN": 90.2903,
    "BWP": 13.028,
    "BYN": 3.0857,
    "BYR": 23710.413982,
    "BZD": 2.4304,
    "CAD": 1.509059,
    "CDF": 2415.801291,
    "CHF": 1.105969,
    "CLF": 0.031276,
    "CLP": 863.015413,
    "CNY": 7.857588,
    "COP": 4383.299997,
    "CRC": 740.909999,
    "CUC": 1.209715,
    "CUP": 32.057447,
    "CVE": 110.265,
    "CZK": 25.821428,
    "DJF": 214.65,
    "DKK": 7.436607,
    "DOP": 68.534,
    "DZD": 160.628,
    "EGP": 18.997,
    "ERN": 18.148037,
    "ETB": 50.6912,
    "EUR": 1,
    "FJD": 2.465888,
    "FKP": 0.878707,
    "GBP": 0.871961,
    "GEL": 4.17399,
    "GGP": 0.878707,
    "GHS": 6.9722,
    "GIP": 0.878707,
    "GMD": 61.829005,
    "GNF": 11954.899991,
    "GTQ": 9.3041,
    "GYD": 252.16,
    "HKD": 9.38639,
    "HNL": 28.988,
    "HRK": 7.570643,
    "HTG": 101.643,
    "HUF": 363.20125,
    "IDR": 17558.831755,
    "ILS": 3.941433,
    "IMP": 0.878707,
    "INR": 90.644555,
    "IQD": 1759.169999,
    "IRR": 50935.050464,
    "ISK": 151.214801,
    "JEP": 0.878707,
    "JMD": 183.314,
    "JOD": 0.857736,
    "JPY": 130.534345,
    "KES": 130.8825,
    "KGS": 102.566944,
    "KHR": 4879.599996,
    "KMF": 493.987584,
    "KPW": 1088.743732,
    "KRW": 1348.989951,
    "KWD": 0.364221,
    "KYD": 1.0048,
    "KZT": 518.95,
    "LAK": 11361.599992,
    "LBP": 1823.099999,
    "LKR": 234.5155,
    "LRD": 208.615813,
    "LSL": 17.303488,
    "LTL": 3.571974,
    "LVL": 0.731745,
    "LYD": 5.4043,
    "MAD": 10.7406,
    "MDL": 21.6128,
    "MGA": 4550.699997,
    "MKD": 61.615,
    "MMK": 1877.932499,
    "MNT": 3448.476946,
    "MOP": 9.64,
    "MRO": 431.868047,
    "MUR": 48.88,
    "MVR": 18.690555,
    "MWK": 951.855999,
    "MXN": 23.998694,
    "MYR": 4.971329,
    "MZN": 67.254152,
    "NAD": 17.303436,
    "NGN": 461.510781,
    "NIO": 42.08,
    "NOK": 10.039607,
    "NPR": 144.464,
    "NZD": 1.68238,
    "OMR": 0.465753,
    "PAB": 1.2058,
    "PEN": 4.5299,
    "PGK": 4.2537,
    "PHP": 58.37,
    "PKR": 185.231,
    "PLN": 4.556154,
    "PYG": 7793.299994,
    "QAR": 4.40427,
    "RON": 4.921367,
    "RSD": 117.55,
    "RUB": 90.573907,
    "RWF": 1206.409999,
    "SAR": 4.537365,
    "SBD": 9.654604,
    "SCR": 16.839683,
    "SDG": 461.510722,
    "SEK": 10.143828,
    "SGD": 1.605286,
    "SHP": 0.878707,
    "SLL": 12380.223711,
    "SOS": 706.473969,
    "SRD": 17.122352,
    "STD": 25076.349195,
    "SVC": 10.551,
    "SYP": 1521.298157,
    "SZL": 17.2131,
    "THB": 37.991145,
    "TJS": 13.7478,
    "TMT": 4.234002,
    "TND": 3.317648,
    "TOP": 2.744122,
    "TRY": 10.135723,
    "TTD": 8.1887,
    "TWD": 33.929123,
    "TZS": 2796.099998,
    "UAH": 33.631,
    "UGX": 4344.299997,
    "USD": 1.209715,
    "UYU": 53.287,
    "UZS": 12707.869991,
    "VEF": 258673627223.79065,
    "VND": 27817.999979,
    "VUV": 132.510806,
    "WST": 3.062668,
    "XAF": 655.957,
    "XAG": 0.046509,
    "XAU": 0.000681,
    "XCD": 3.269316,
    "XDR": 0.8403,
    "XOF": 655.957,
    "XPF": 120.129054,
    "YER": 302.916988,
    "ZAR": 17.282598,
    "ZMK": 10888.890996,
    "ZMW": 26.8397,
    "ZWL": 389.528466
  }
};
*/

export class DataController extends React.Component {
  static displayName = "DataController";
  state = {
    data: undefined,
    error: undefined,
    loading: false,
  };
  
  componentDidMount() {
    // this.setState({ data: mockData });
    this.loadData();
  }

  loadData = () => {
    const { url } = this.props;
    this.setState({ loading: true });
    fetch(url)
      .then(resp => resp.json())
      .then(
        (data) => {
          if (data.error) {
            this.setState({
              loading: false,
              error: data.error,
            });
          }
          else {
            this.setState({
              loading: false,
              data,
            });
          }
        },
        (error) => {
          this.setState({
            loading: false,
            error,
          });
        }
      );
  }
  
  render() {
    const { url } = this.props;
    const { error, loading, data } = this.state;

    if (error) {
      return <Error message={error.message || error.info} />;
    }

    if (loading) {
      return <LoadingIcon />;
    }

    if (!data?.base || !data?.rates) {
      return (<Error message="There is no results to display. Please try again later." />);
    }

    const { base, rates, date } = data;

    return (<>
      <CurrencyForm base={base} rates={rates} />
      <Source url={url} date={date} />
    </>);
  }
}
