import React from 'react';
import Registration from '../../containers/registration/Registration'
import Login from '../../containers/registration/Login'

class RegistrationView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Registration / Login Views Below</h1>
        <Registration />
        <Login />
      </div>
    );
  }
}

export default RegistrationView;
