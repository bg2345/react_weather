import React, { Component } from 'react';
import './index.css';
import DriverItem from '../driverItem'


class StandingsTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Sponser</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>

        {this.props.data.MRData &&
          this.props.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
              driver => <DriverItem driver={driver} key={driver.position} />
            )
        }

        </tbody>
      </table>
    );

  }
}

export default StandingsTable;
