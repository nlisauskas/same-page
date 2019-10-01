import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions/registerActions';

class Login extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)

    this.state = {
      credentials: {email: '', password: '', profileType: 'investor'}
    }

  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  };

  onSave(event) {
    event.preventDefault();
    this.props.login(this.state.credentials, this.state.profileType);
  };

  render() {
    return (
      < div>
        <h2>Login Page</h2>
        < form>
          <label>E-mail address</label><br></br>
          <input
            name="email"
            label="email"
            value={this.state.credentials.email}
            onChange={this.onChange}/><br></br>
          <label>Password</label><br></br>
          < input
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>
            <label>What type of user are you?</label><br></br>
            <select name="profileType" value={this.state.credentials.profileType} onChange={this.onChange}>
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

const mapDispatchToProps = (dispatch) => {
  return { login: (credentials, profileType) => dispatch(login(credentials, profileType))}
       };

export default connect(null, mapDispatchToProps)(Login);
