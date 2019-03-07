import React, { Component } from 'react';
import './index.css';
import StandingsForm from '../../components/standingsForm';
import StandingsTable from '../../components/standingsTable';

class Standings extends Component {
  constructor() {
    super();
    this.state = {
      'data': []
    }

  }


  getStandings = async(e) => {
    e.preventDefault();
    let year = e.target.elements.year.value;
    let round = e.target.elements.round.value;


    const URL = `https://ergast.com/api/f1/${year}/${round}/driverStandings.json`;


    let response = await fetch(URL);

    let data = await response.json();

    this.setState({ 'data': data });
  }

  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <StandingsForm getStandings={this.getStandings} />
        </div>
      </div>
      <div className="row">
        <div className="cold-md-12">
          <StandingsTable data={this.state.data} />
        </div>
      </div>
    </div>
    );
  }
}

export default Standings;
