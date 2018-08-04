import React from 'react';
import { connect } from 'react-redux';
import { track, untrack } from '../../actions/tracking_actions';
import { withRouter } from 'react-router-dom';

class VenueCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracked: props.tracked
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTracking = this.handleTracking.bind(this);
  }
  
  handleTracking (e) {
    if (this.state.tracked) {
      this.props.untrack({ trackable_type: "Venue", trackable_id: this.props.venue.id });
    } else {
      this.props.track({ trackable_type: "Venue", trackable_id: this.props.venue.id });
    }

    e.stopPropagation();
    this.setState({ tracked: !this.state.tracked })
  }

  handleClick () {
    this.props.history.push(`/venues/${this.props.venue.id}`);
  }

  render() {
    let styles = {
      backgroundImage: `url(${this.props.venue.photoUrl})`,
      backgroundSize: 'cover',
      overflow: 'hidden'
    };
    
    return (
      <div className="item-card" >
        <div className="item-card-artwork" style={styles}>
          <div className="trackButton" onClick={this.handleTracking}>
            <i className={`fa-heart ${ this.state.tracked ? "fas tracked" : "far"}`}></i>
          </div>
        </div>
        <div className="item-card-info" >
          <h1>{this.props.venue.name}</h1>
          <h3>{this.props.venue.city}</h3>
        </div>
      </div>
    );    
  }
  
};

const mDP = dispatch => {
  return {
    track: item => dispatch(track(item)),
    untrack: item => dispatch(untrack(item))
  };
};

export default withRouter(connect(null, mDP)(VenueCard));
