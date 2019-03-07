import React, { Component } from 'react';
import './index.css';

class DriverItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.driver.position}</td>
        <td>{this.props.driver.Driver.givenName} {this.props.driver.Driver.familyName}</td>
        <td>{this.props.driver.Driver.nationality}</td>
        <td>{this.props.driver.Constructors[0].name}</td>
        <td>{this.props.driver.points}</td>

      </tr>
    );
  }
}

export default DriverItem;
