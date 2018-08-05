import React from 'react';
import { connect } from 'react-redux';
import { track, untrack } from '../../actions/tracking_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.tracked = false;
    this.handleTracking = this.handleTracking.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleTracking (e) {
    if (this.props.loggedIn) {
      if (this.tracked) {
        this.props.untrack({ trackable_type: "Event", trackable_id: this.props.event.id });
      } else {
        this.props.track({ trackable_type: "Event", trackable_id: this.props.event.id });
      }

      e.stopPropagation();
      this.tracked = !this.tracked;
    } else {
      e.stopPropagation();
      this.props.openLoginModal();
    }
  }

  handleClick () {
    this.props.history.push(`/events/${this.props.event.id}`);
  }

  render () {
    this.tracked = this.props.trackedEvents.includes(this.props.event.id);

    let title;
    if (this.props.event.title.length > 26) {
      title = this.props.event.title.slice(0, 26) + "...";
    } else {
      title = this.props.event.title;
    }

    // const performer = performers.sample;

    // let styles = {
    //   backgroundImage: `url(${performer.photoUrl})`,
    //   backgroundSize: 'cover',
    //   overflow: 'hidden'
    // };

    return (
      <div className="item-card" onClick={this.handleClick}>
        <div className="item-card-artwork">
          <div className="trackButton" onClick={this.handleTracking}>
            <i className={`fa-heart ${ this.tracked ? "fas tracked" : "far"}`}></i>
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

const mSP = state => {
  let trackedEvents = [];

  if (state.entities.currentUser.trackedItems) {
    trackedEvents = state.entities.currentUser.trackedItems.trackedEvents;
  }

  return {
    loggedIn: Boolean(state.entities.currentUser.id),
    trackedEvents
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
