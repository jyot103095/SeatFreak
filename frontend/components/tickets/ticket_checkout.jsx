import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestTicket, buyTicket } from '../../actions/ticket_actions';
import Footer from '../footer';

class TicketCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageView: false
    };
    this.handleBuy = this.handleBuy.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    if (!this.props.ticket) {
      this.props.requestTicket(this.props.match.params.ticketId);
    }
  }

  handleLoad() {
    this.setState({
      imageView: true
    });
  }

  handleBuy() {
    this.props.buyTicket(this.props.ticket.id).then(
      () => this.props.history.push("/account/tickets")
    );
  }

  render() {
    return (
      <div className="ticket-checkout-wrapper">
        { this.props.ticket ?
          <div className="checkout-container">
            <div className="checkout-info-container">
              <div className="ticket-checkout-loading">
                <img src={this.props.event.photoUrl} onLoad={this.handleLoad} className={this.state.imageView ? "image-shown" : "image-hidden" } />
              </div>
              <h1>{this.props.event.title}</h1>
              <h1>{this.props.event.eventOn}</h1>
              <h1>{this.props.event.venue}</h1>
              <h1>Section {this.props.ticket.section} Row {this.props.ticket.row}</h1>
              <div className="checkout-price">
                <h1 className="checkout-ticket-price">${this.props.ticket.price}</h1>
                <button className="ticket-checkout-button" onClick={this.handleBuy}>Buy Ticket</button>
              </div>
            </div>
          </div> :
          <div className="loading-div"></div>
        }
        <Footer />
      </div>
    );
  }
};

const mSP = (state, ownProps) => {
  const ticket = state.entities.tickets[ownProps.match.params.ticketId];
  let event;
  let venue;

  if (ticket) {
    event = state.entities.events[ticket.eventId];
    venue = state.entities.venues[event.venueId];
  }

  return {
    ticket,
    event
  }
};

const mDP = dispatch => {
  return {
    requestTicket: ticketId => dispatch(requestTicket(ticketId)),
    buyTicket: ticketId => dispatch(buyTicket(ticketId))
  }
};

export default connect(mSP, mDP)(TicketCheckout);
