import React from 'react';
import PropertiesContainer from '../../containers/investors/PropertiesContainer'
import FinancialsContainer from '../../containers/investors/FinancialsContainer'
import TenantsContainer from '../../containers/investors/TenantsContainer'
import ProfileContainer from '../../containers/investors/ProfileContainer'
import ProjectsContainer from '../../containers/investors/ProjectsContainer'
import PaymentsContainer from '../../containers/investors/PaymentsContainer'
import InvestorNavigation from '../../components/investors/InvestorNavigation'

class TenantsView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Tenant Views Below</h1>
        <h2>Tenant Payments View</h2>
        <h2>Tenant Maintenance View</h2>
        <h2>Tenant Claim Management View</h2>
        <h2>Tenant User Profile View</h2>
      </div>
    );
  }
}

export default TenantsView;
