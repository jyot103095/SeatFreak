import React from 'react';
import { connect } from 'react-redux';
import {
  requestVenues
} from '../../actions/venue_actions';
import { withRouter, Link } from 'react-router-dom';

class VenuesIndex extends React.Component {
  componentDidMount() {
    this.props.requestVenues();
  }

  render() {

    const venueIndexItems = this.props.venues.map((venue, id) => {

      return (
        <tr key={venue.id}>
          <td className="venue-list-id">{id + 1}</td>
          <td>
            <div className="venue-list-item" >
              <Link to={`/venues/${venue.id}`}>{venue.name}</Link>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <div className="venues-index-container" >
        <header className="main-content-splash">
          <div className="main-content-splash-info">
            <h3 className="main-content-route-info">
              <span><Link to="/" >Home</Link> / Venues</span>
            </h3>
            <h1 className="main-content-splash-name">Venue Tickets</h1>
          </div>
        </header>
        <div className="main-content-content" >
          <h1 className="venues-index-title">All Venues</h1>
          <table className="venues-list" >
            <tbody>
              {venueIndexItems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mSP = (state, ownProps) => {
  const venues = Object.values(state.entities.venues);
  return {
    venues
  };
};

const mDP = dispatch => {
  return {
    requestVenues: () => dispatch(requestVenues())
  };
};

export default withRouter(connect(mSP, mDP)(VenuesIndex));
