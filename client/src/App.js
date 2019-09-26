import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'
import InvestorsView from './views/investors/InvestorsView'
import RegistrationView from './views/registration/RegistrationView'
import TenantsView from './views/tenants/TenantsView'
import InsurersView from './views/insurers/InsurersView'
import ContractorsView from './views/contractors/ContractorsView'
import AdjustersView from './views/adjusters/AdjustersView'


class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Router>
      <div>
      <h1>SamePage Real Estate Management</h1>
      <h2>Getting investors, tenants, contractors, and insurers on the same page.</h2>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <h4>Wireframe Navigation - App Layout Thought Process</h4>
            <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/">Login / Register</Link></li>
            <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/investors">Investors' View</Link></li>
            <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/tenants">Tenants' View</Link></li>
            <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/contractors">Contractors' View</Link></li>
            <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/insurers">Insurers' View</Link></li>
            <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/adjusters">Adjusters' View</Link></li>
          </ul>
        </nav>

      <Route exact path="/" component={RegistrationView} />
      <Route path="/investors" component={InvestorsView} />
      <Route path="/tenants" component={TenantsView} />
      <Route path="/contractors" component={ContractorsView} />
      <Route path="/insurers" component={InsurersView} />
      <Route path="/adjusters" component={AdjustersView} />
      </div>
      </Router>
    );
  }
}

export default App;
