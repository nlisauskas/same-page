import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

const AdjusterNavigation = () =>
  <div class="topnav">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/adjusters">Dashboard</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/adjusters/:adjusterId/payments">Payments</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/adjusters/:adjusterId/claims">Claim Management</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/adjusters/:adjusterId/financials">Financials & Taxes</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/adjusters/:adjusterId/documentation">Documentation</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/adjusters/:adjusterId/profile">Profile</Link></li>
      </ul>
    </nav>
  </div>
export default AdjusterNavigation;
