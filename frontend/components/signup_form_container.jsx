import { connect } from 'react-redux';
import React from 'react';
import { signupUser } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors,
    formType: 'Sign up',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signupUser(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
