import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.addNameInputs = this.addNameInputs.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  addNameInputs() {
    return (
      <div>
        <input type="text" value={this.state.f_name} onChange={this.update('f_name')} placeholder="First Name"></input>
        <input type="text" value={this.state.l_name} onChange={this.update('l_name')} placeholder="Last Name"></input>
        <br/>
      </div>
    );
  }

  render() {
    let title;
    if (this.props.formType === "Sign up") {
      title = <h2>Sign up for SeatFreak</h2>
    } else {
      title = <h2>Log in to SeatFreak</h2>
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          { title }
          <br/>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Email"
            />
            <br/>

            { (this.props.formType === 'Sign up') ? this.addNameInputs() : null }

            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
            <br/>
            <input className="session-submit" type="submit" value={`${this.props.formType} with Email`} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
