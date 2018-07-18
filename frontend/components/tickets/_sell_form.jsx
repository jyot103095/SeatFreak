import React from 'react';

class SellForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.ticket
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
    this.props.submitAction(this.state).then(this.props.closeModal);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Price:
          <input type="text" onChange={this.handleChange} value={this.state.price}></input>
        </label>
        <input type="submit" value={this.props.formType} />
      </form>
    );
  }
}

export default SellForm;
