import React, {Component} from 'react';
import {Card, Chart, CountryPicker, Footer} from './comp'
import {fetchData} from './api/index.js'

class App extends Component{

  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData()
 
    this.setState({data:fetchedData})
  }

  countryHandler = async (country) =>{
    const fetchedData = await fetchData(country)
    this.setState({data:fetchedData, country:country})
  }

  render() {
    const { data,country } = this.state

    return (
      <div className="container">
        <h1> Covid-19 Tracker</h1>
        <Card data={data} />
        <CountryPicker countryHandler={this.countryHandler} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;