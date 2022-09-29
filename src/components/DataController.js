import React from "react";
import { Error } from "./Error";
import { LoadingIcon } from "./LoadingIcon";
import { CurrencyForm } from "./CurrencyForm";
import { Source } from "./Source";



export class DataController extends React.Component {
  static displayName = "DataController";
  state = {
    data: undefined,
    error: undefined,
    loading: false,
  };
  
  componentDidMount() {
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

    if (!data?.base_code || !data?.conversion_rates) {
      return (<Error message="There is no results to display. Please try again later." />);
    }

    const { base_code, conversion_rates, time_last_update_utc } = data;

    return (<>
      
      <CurrencyForm base={base_code} rates={conversion_rates} />
      <Source url={url} date={time_last_update_utc} />
    
    </>);
  }
}
