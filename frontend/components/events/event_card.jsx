import React from 'react';
import { connect } from 'react-redux';
import { track, untrack } from '../../actions/tracking_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageView: false
    };
    this.handleTracking = this.handleTracking.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    this.setState({
      imageView: true
    });
  }

  handleTracking (e) {
    if (this.props.loggedIn) {
      if (this.props.tracked) {
        this.props.untrack({ trackable_type: "Event", trackable_id: this.props.event.id });
      } else {
        this.props.track({ trackable_type: "Event", trackable_id: this.props.event.id });
      }

      e.stopPropagation();
    } else {
      e.stopPropagation();
      this.props.openLoginModal();
    }
  }

  handleClick () {
    this.props.history.push(`/events/${this.props.event.id}`);
  }

  render () {
    let title;
    if (this.props.event.title.length > 26) {
      title = this.props.event.title.slice(0, 26) + "...";
    } else {
      title = this.props.event.title;
    }

    return (
      <div className="item-card" onClick={this.handleClick}>
        <div className="item-card-artwork loading-gif">
          <img src={this.props.event.photoUrl} onLoad={this.handleLoad} className={this.state.imageView ? "image-shown" : "image-hidden"}/>
          <div className="trackButton" onClick={this.handleTracking}>
            <i className={`fa-heart ${ this.props.tracked ? "fas tracked" : "far"}`}></i>
          </div>
          <div className="item-card-price">
            See Tickets
          </div>
        </div>
        <div className="item-card-info" >
          <h1>{title}</h1>
          <h3>{this.props.event.eventOn}</h3>
        </div>
      </div>
    );
  } 
}

const mSP = (state, ownProps) => {
  let trackedEvents = [];

  if (state.entities.currentUser.trackedItems) {
    trackedEvents = state.entities.currentUser.trackedItems.trackedEvents;
  }

  let tracked = trackedEvents.includes(ownProps.event.id);

  return {
    loggedIn: Boolean(state.entities.currentUser.id),
    tracked
  };
};

const mDP = dispatch => {
  return {
    track: item => dispatch(track(item)),
    untrack: item => dispatch(untrack(item)),
    openLoginModal: () => dispatch(openModal("login"))
  };
};

export default withRouter(connect(mSP, mDP)(EventCard));
