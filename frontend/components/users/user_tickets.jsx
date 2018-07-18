import React from 'react';
import { connect } from 'react-redux';
import { openTicketModal } from '../../actions/modal_actions';
import { requestTickets, sellTicket } from '../../actions/ticket_actions';

class UserTicketsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1
    }
    this.handleSell = this.handleSell.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.props.requestTickets(this.props.userId);
  }

  handleSell(ticketId) {
    this.props.openTicketModal('ticketSell', ticketId);
  }

  handleUpdate(ticketId) {
    this.props.openTicketModal('updatePrice', ticketId);
  }

  render() {
    let ticketsOnSale = this.props.ticketsOnSale.map(ticket => {
      const eventTitle = this.props.events[ticket.eventId].title;
      const eventOn = this.props.events[ticket.eventId].eventOn.split(" ");
      const day = eventOn[0];
      const date = eventOn.slice(1, 3).join(" ");
      const time = eventOn.slice(4, 6).join(" ");

      return (
        <div key={ticket.id} className="user-ticket-info">
          <div className="user-event-item-event-on" >
            <p className="user-event-date">{date}</p>
            <p className="user-event-time">{day} · {time}</p>
          </div>
          <div className="user-event-info">
            <p className="user-event-title">{eventTitle}</p>
            <p className="user-seat-info" >Section {ticket.section} Row {ticket.row}</p>
          </div>
          <div className="user-ticket-sell-button">
            <button onClick={() => this.handleUpdate(ticket.id)}
              className="event-show-button" >Update Price</button>
          </div>
        </div>
      );
    });

    let ticketsNotOnSale = this.props.ticketsNotOnSale.map(ticket => {
      const eventTitle = this.props.events[ticket.eventId].title;
      const eventOn = this.props.events[ticket.eventId].eventOn.split(" ");
      const day = eventOn[0];
      const date = eventOn.slice(1, 3).join(" ");
      const time = eventOn.slice(4, 6).join(" ");

      return (
        <div key={ticket.id} className="user-ticket-info">
          <div className="user-event-item-event-on" >
            <p className="user-event-date">{date}</p>
            <p className="user-event-time">{day} · {time}</p>
          </div>
          <div className="user-event-info">
            <p className="user-event-title">{eventTitle}</p>
            <p className="user-seat-info" >Section {ticket.section} Row {ticket.row}</p>
          </div>
          <div className="user-ticket-sell-button">
            <button onClick={() => this.handleSell(ticket.id)}
              className="event-show-button">Sell</button>
          </div>
        </div>
      );
    });

    let tab;
    if (this.state.selected === 1) {
      tab = () => (
        <div className="upcoming-tickets-list" >
          <h1>Upcoming Tickets</h1>
          <div className="user-tickets-list-not-onsale">
            <h2>Events You're Going To</h2>
            <div className="user-tickets-list" >
              {ticketsNotOnSale}
            </div>
          </div>
          <div className="user-tickets-list-onsale">
            <h2>Tickets on Sale </h2>
            <div className="user-tickets-list" >
              {ticketsOnSale}
            </div>
          </div>
        </div>
      );
    } else if (this.state.selected === 2) {
      tab = () => (
        <div className="expired-tickets-list selected-tab">

        </div>
      );
    }


    return (
      <div className="user-tickets-container">
        <header className="main-content-splash">
          <h1 className="main-content-splash-name">Tickets</h1>
        </header>
        <div className="main-content-content" >
          <div className="user-tickets-tabs">
            <h2 className={this.state.selected === 1 ? "active-tab" : null}
              onClick={() => this.setState({ selected: 1 })}>My Tickets</h2>
            <h2 className={this.state.selected === 2 ? "active-tab" : null}
              onClick={() => this.setState({ selected: 2 })}>History</h2>
          </div>
          { tab() }
        </div>
      </div>
    );
  }
}

const mSP = state => {
  const currentUserTickets = state.entities.currentUser.ticketIds;
  const tickets = currentUserTickets.map(ticketId => state.entities.tickets[ticketId]);

  if (tickets.includes(undefined)) {
    return {
      ticketsOnSale: [],
      ticketsNotOnSale: [],
    };
  }

  const ticketsOnSale = tickets.filter(ticket => ticket.onSale && !ticket.expired);
  const ticketsNotOnSale = tickets.filter(ticket => !ticket.onSale && !ticket.expired);
  const expiredTickets = tickets.filter(ticket => ticket.expired);
  return {
    ticketsOnSale,
    ticketsNotOnSale,
    events: state.entities.events
  };
};

const mDP = dispatch => {
  return {
    requestTickets: userId => dispatch(requestTickets(userId)),
    openTicketModal: (modal, ticket) => dispatch(openTicketModal(modal, ticket))
  };
};

export default connect(mSP, mDP)(UserTicketsIndex);
