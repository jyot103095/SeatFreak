import React from 'react';
import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  componentDidMount () {
    this.props.requestEvents();
  }

  render() {
    const eventItems = this.props.events.map(event => <EventIndexItem key={event.id} event={event} />);
    return (
      <ul>
        {eventItems}
      </ul>
    );
  }
}

const mSP = state => {
  return {
    events: Object.values(state.entities.events)
  }
};

const mDP = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents())
  }
}

export default connect(mSP, mDP)(EventIndex);
