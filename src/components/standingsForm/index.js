import React, { Component } from 'react';
import './index.css';


class StandingsForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.props.getStandings}>
            <input type="text" name="year" placeholder="Year..." />
            <input type="text" name="round" placeholder="Round..." />
            <input type="submit" value="Get Standings" />
          </form>
        </div>
      </div>

    );
  }
}

export default StandingsForm;
