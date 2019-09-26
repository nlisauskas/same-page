import React from 'react';
import PropertiesContainer from '../../containers/investors/PropertiesContainer'
import FinancialsContainer from '../../containers/investors/FinancialsContainer'
import TenantsContainer from '../../containers/investors/TenantsContainer'
import ProfileContainer from '../../containers/investors/ProfileContainer'
import ProjectsContainer from '../../containers/investors/ProjectsContainer'
import PaymentsContainer from '../../containers/investors/PaymentsContainer'
import InvestorNavigation from '../../components/investors/InvestorNavigation'

class ContractorsView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Contractor Views Below</h1>
        <h2>Contractor Payments View</h2>
        <h2>Contractor Financials / Taxes View</h2>
        <h2>Contractor Jobs View</h2>
        <h2>Contractor Claim Management View</h2>
        <h2>Contractor User Profile View</h2>
      </div>
    );
  }
}

export default ContractorsView;
