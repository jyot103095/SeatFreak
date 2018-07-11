import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { openModal, closeModal } from '../actions/modal_actions';
import { loginUser } from '../actions/session_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors,
    formType: 'Log in',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(loginUser(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
