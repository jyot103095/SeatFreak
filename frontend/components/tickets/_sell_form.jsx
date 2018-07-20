import React from 'react';

class SellForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.ticket;
    this.event = this.props.event;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      price: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.state);
    this.props.closeModal();
  }

  render() {
    return (
      <div className="sell-form-container">
        <h1 className="sell-form-title">List on SeatFreak</h1>
        <form className="sell-form" onSubmit={this.handleSubmit} >
          <div className="sell-form-wrapper">
            <div className="ticket-event-info">
              <h1 className="ticket-event-title">{this.event.title}</h1>
              <h3 className="ticket-event-eventon">{this.event.eventOn}</h3>
            </div>
            <div className="sell-ticket-info">
              <h3>Section {this.state.section} Row {this.state.row}</h3>
            </div>
            <div className="sell-price-input-wrapper">
              <p>Price: $</p>
              <input type="text" onChange={this.handleChange} value={this.state.price}></input>
            </div>
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SellForm;
