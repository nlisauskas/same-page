import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {signUp} from '../actions/userActions';

class Registration extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)

    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      gender: '',
      birthdate: 0,
      first_name: '',
      last_name: ''
  }
};

  onChange(event) {
    const field = event.target.name;
    const user = this.state;
    user[field] = event.target.value;
    return this.setState({user: user});
  };

  onSave(event) {
    event.preventDefault();
    this.props.signupUser(this.state);
  };

  render() {
    return (
      < div>
        <h2>Sign Up for SamePage below!</h2>
        < form>
          <label>First Name</label><br></br>
          < input
            name="first_name"
            label="first_name"
            value={this.state.first_name}
            onChange={this.onChange}/><br></br>
            <label>Last Name</label><br></br>
            < input
              name="last_name"
              label="last_name"
              value={this.state.last_name}
              onChange={this.onChange}/><br></br>
            <label>E-mail</label><br></br>
          <input
            name="email"
            label="email"
            value={this.state.email}
            onChange={this.onChange}/><br></br>
          <label>Password</label><br></br>
          < input
            name="password"
            label="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}/><br></br>
            <label>Confirm Password</label><br></br>
            < input
              name="password_confirmation"
              label="password_confirmation"
              type="password"
              value={this.state.password_confirmation}
              onChange={this.onChange}/><br></br>
            <label>Gender</label><br></br>
              < input
                name="gender"
                label="gender"
                value={this.state.gender}
                onChange={this.onChange}/><br></br>
            <label>What type of user are you?</label><br></br>
            <select value={this.state.profile_type}>
              <option value="investor">Investor</option>
              <option value="tenant">Tenant</option>
              <option value="contractor">Contractor</option>
              <option value="insurer">Insurer</option>
              <option value="adjuster">Adjuster</option>
            </select><br></br>
          < input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
        </form>
      </div>
    )
  }
}


// const mapDispatchToProps = (dispatch) => {
  // return { signupUser: userInfo => dispatch(signupUser(userInfo))}
       // };

export default Registration;
