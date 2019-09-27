import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

const ContractorNavigation = () =>
  <div class="topnav">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/contractors">Dashboard</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/contractors/:contractorId/financials">Financials & Taxes</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/contractors/:contractorId/projects">Jobs</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/contractors/:contractorId/profile">Profile</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/contractors/:contractorId/payments">Payments</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/contractors/:contractorId/claims">Claim Management</Link></li>
      </ul>
    </nav>
  </div>
export default ContractorNavigation;
