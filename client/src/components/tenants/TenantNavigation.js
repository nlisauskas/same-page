import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

const TenantNavigation = () =>
  <div class="topnav">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/tenants/:tenantId/payments">Payments</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/tenants/:tenantId/projects">Maintenance</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/tenants/:tenantId/claims">Claim Management</Link></li>
        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/tenants/:tenantId/profile">Profile</Link></li>
      </ul>
    </nav>
  </div>
export default TenantNavigation;
