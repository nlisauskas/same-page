import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

const InvestorNavigation = () =>
  <div class="topnav">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/investors">Dashboard</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/investors/:investorId/properties">Properties</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/investors/:investorId/financials">Financials & Taxes</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/investors/:investorId/tenants">Tenants</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/investors/:investorId/projects">Maintenance</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/investors/:investorId/profile">Profile</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/investors/:investorId/payments">Payments</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/investors/:investorId/claims">Claim Management</Link></li>
      </ul>
    </nav>
  </div>
export default InvestorNavigation;
