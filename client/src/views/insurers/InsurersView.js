import React from 'react';
import PropertiesContainer from '../../containers/investors/PropertiesContainer'
import FinancialsContainer from '../../containers/investors/FinancialsContainer'
import TenantsContainer from '../../containers/investors/TenantsContainer'
import ProfileContainer from '../../containers/investors/ProfileContainer'
import ProjectsContainer from '../../containers/investors/ProjectsContainer'
import PaymentsContainer from '../../containers/investors/PaymentsContainer'
import InvestorNavigation from '../../components/investors/InvestorNavigation'

class InsurersView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Insurer Views Below</h1>
        <h2>Insurer Payments View</h2>
        <h2>Insurer Financials / Taxes View</h2>
        <h2>Insurer Claim Management View</h2>
        <h2>Insurer User Profile View</h2>
      </div>
    );
  }
}

export default InsurersView;
