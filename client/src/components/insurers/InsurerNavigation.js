import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

const InsurerNavigation = () =>
  <div class="topnav">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/insurers">Dashboard</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/insurers/:insurerId/payments">Payments</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/insurers/:insurerId/claims">Claim Management</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/insurers/:insurerId/financials">Financials & Taxes</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/insurers/:insurerId/profile">Profile</Link></li>
      </ul>
    </nav>
  </div>
export default InsurerNavigation;
