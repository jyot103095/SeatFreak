import { connect } from 'react-redux';
import React from 'react';
import { signupUser } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signupUser(user)),
    otherForm: (
      <div className="other-form">
        Already have a SeatFreak account? <span>
        <button onClick={() => dispatch(openModal('login'))}>
          Log in here
        </button>
      </span>
      </div>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
