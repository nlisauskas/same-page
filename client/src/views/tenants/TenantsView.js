import React from 'react';
import ProfileContainer from '../../containers/tenants/ProfileContainer'
import ProjectsContainer from '../../containers/tenants/ProjectsContainer'
import PaymentsContainer from '../../containers/tenants/PaymentsContainer'
import ClaimsContainer from '../../containers/tenants/ClaimsContainer'
import TenantNavigation from '../../components/tenants/TenantNavigation'
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

class TenantsView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Tenant Views Below</h1>
        <TenantNavigation />
        <Route path={`/tenants/:tenantId/projects`} component={ProjectsContainer} />
        <Route path={`/tenants/:tenantId/profile`} component={ProfileContainer} />
        <Route path={`/tenants/:tenantId/payments`} component={PaymentsContainer} />
        <Route path={`/tenants/:tenantId/claims`} component={ClaimsContainer} />
      </div>
    );
  }
}

export default TenantsView;
