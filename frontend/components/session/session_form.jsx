import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      f_name: '',
      l_name: ''
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
      <ul className="errors">
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
      <div className="extra-inputs">
        <input type="text" className="f-name-input" value={this.state.f_name} onChange={this.update('f_name')} placeholder="First Name"></input>
        <input type="text" className="l-name-input" value={this.state.l_name} onChange={this.update('l_name')} placeholder="Last Name"></input>
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
        <div onClick={this.props.closeModal} className="close-x">&times;</div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <header>
            { title }
          </header>
          {this.renderErrors()}
          <div className="login-form">
            <div className="regular-inputs">
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
                required
              />
            </div>

            { (this.props.formType === 'Sign up') ? this.addNameInputs() : null }

            <div className="regular-inputs">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </div>

            <input className="session-submit" type="submit" value={`${this.props.formType} with Email`} />
          </div>
          { this.props.otherForm }
        </form>

      </div>
    );
  }
}

export default SessionForm;
