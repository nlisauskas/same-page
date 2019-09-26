import React from 'react';
import PropertiesContainer from '../../containers/investors/PropertiesContainer'
import FinancialsContainer from '../../containers/investors/FinancialsContainer'
import TenantsContainer from '../../containers/investors/TenantsContainer'
import ProfileContainer from '../../containers/investors/ProfileContainer'
import ProjectsContainer from '../../containers/investors/ProjectsContainer'
import PaymentsContainer from '../../containers/investors/PaymentsContainer'
import InvestorNavigation from '../../components/investors/InvestorNavigation'

class InvestorsView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Investor Views Below</h1>
        <InvestorNavigation />
        <h2>Investor Property View</h2>
        <PropertiesContainer />
        <h2>Investor Financials / Taxes View</h2>
        <FinancialsContainer />
        <h2>Investor Tenants View</h2>
        <TenantsContainer />
        <h2>Investor Maintenance View</h2>
        <ProjectsContainer />
        <h2>Investor User Profile View</h2>
        <ProfileContainer />
        <h2>Investor Payments View</h2>
        <PaymentsContainer />
        <h2>Investor Claim Management View</h2>
      </div>
    );
  }
}

export default InvestorsView;
