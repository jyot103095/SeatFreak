import React from 'react';
import { withRouter } from 'react-router-dom';

class EventsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/events/${this.props.event.id}`);
  }

  render() {
    const eventOn = this.props.event.eventOn.split(" ");
    const day = eventOn[0];
    const date = eventOn.slice(1, 3).join(" ");
    const time = eventOn.slice(4, 6).join(" ");

    return (
      <div className="performer-event-item-container">
        <div className="performer-event-item-event-on" >
          <p className="performer-event-date">{date}</p>
          <p className="performer-event-time">{day} · {time}</p>
        </div>
        <div className="performer-event-info">
          <p className="performer-event-title">{this.props.event.title}</p>
        </div>
        <div className="performer-event-button">
          <button className="event-show-button" onClick={this.handleClick}>See Tickets</button>
        </div>
      </div>
    );
  }
};

export default withRouter(EventsListItem);
