import React from 'react';
import PropertiesContainer from '../../containers/investors/PropertiesContainer'
import FinancialsContainer from '../../containers/investors/FinancialsContainer'
import TenantsContainer from '../../containers/investors/TenantsContainer'
import ProfileContainer from '../../containers/investors/ProfileContainer'
import ProjectsContainer from '../../containers/investors/ProjectsContainer'
import PaymentsContainer from '../../containers/investors/PaymentsContainer'
import InvestorNavigation from '../../components/investors/InvestorNavigation'

class AdjustersView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Adjuster Views Below</h1>
        <h2>Adjuster Payments View</h2>
        <h2>Adjuster Financials / Taxes View</h2>
        <h2>Adjuster Claim Management View</h2>
        <h2>Adjuster Claim Documentation View</h2>
        <h2>Adjuster User Profile View</h2>
      </div>
    );
  }
}

export default AdjustersView;
