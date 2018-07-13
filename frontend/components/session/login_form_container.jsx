import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { loginUser } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log in',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(loginUser(user)),
    otherForm: (
      <div className="other-form">
        Need a SeatFreak account? <span>
        <button onClick={() => dispatch(openModal('signup'))}>
          Register here
        </button>
      </span>
      </div>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
