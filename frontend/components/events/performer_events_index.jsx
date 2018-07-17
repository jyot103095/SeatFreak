import React from 'react';
import { connect } from 'react-redux';
import {
  requestPerformer
} from '../../actions/performer_actions';
import { withRouter, Link, Redirect } from 'react-router-dom';
import PerformerEventsIndexItem from './performer_events_index_item';

class PerformerEventsIndex extends React.Component {
  componentDidMount() {
    this.props.requestPerformer(this.props.match.params.performerId);
  }

  componentDidUpdate(prevParams) {
    if (prevParams.match.params.performerId !== this.props.match.params.performerId) {
      this.props.requestPerformer(this.props.match.params.performerId);
    }
  }

  render() {
    if (!this.props.performer) return null;

    const eventLinks = this.props.events.map(event => {
      return (
        <li className="performer-event-list-item" key={event.id}>
          <Link to={`/events/${event.id}`} >
            <PerformerEventsIndexItem event={event} />
          </Link>
        </li>
      );
    });

    return (
      <div className="performers-index-container" >
        <header className="main-content-splash">
          <div className="main-content-splash-info">
            <h3 className="main-content-route-info">
              <span>
                <Link to="/" >Home</Link> / <Link to={`/categories/${this.props.performer.category}`} >{this.props.performer.category}</Link> / {this.props.performer.name}
              </span>
            </h3>
            <h1 className="main-content-splash-name">{this.props.performer.name} Tickets</h1>
          </div>
        </header>
        <div className="main-content-content" >
          <h1 className="performer-category-title">All Events</h1>
          <ul>
            {eventLinks}
          </ul>
        </div>
      </div>
    );
  }
}

const mSP = (state, ownProps) => {
  const performerId = Number(ownProps.match.params.performerId);
  const performer = state.entities.performers[performerId];
  const events = Object.values(state.entities.events).filter(event => event.performers.includes(performerId));
  return {
    performer,
    events
  };
};

const mDP = dispatch => {
  return {
    requestPerformer: performerId => dispatch(requestPerformer(performerId))
  };
};

export default withRouter(connect(mSP, mDP)(PerformerEventsIndex));
