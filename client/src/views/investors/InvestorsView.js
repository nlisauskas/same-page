import React from 'react';
import PropertiesContainer from '../../containers/investors/PropertiesContainer'
import FinancialsContainer from '../../containers/investors/FinancialsContainer'
import TenantsContainer from '../../containers/investors/TenantsContainer'
import ProfileContainer from '../../containers/investors/ProfileContainer'
import ProjectsContainer from '../../containers/investors/ProjectsContainer'
import PaymentsContainer from '../../containers/investors/PaymentsContainer'
import ClaimsContainer from '../../containers/investors/ClaimsContainer'
import InvestorNavigation from '../../components/investors/InvestorNavigation'
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

class InvestorsView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Investor Views Below</h1>
        <InvestorNavigation />
        <Route path={`/investors/:investorId/properties`} component={PropertiesContainer} />
        <Route path={`/investors/:investorId/financials`} component={FinancialsContainer} />
        <Route path={`/investors/:investorId/tenants`} component={TenantsContainer} />
        <Route path={`/investors/:investorId/projects`} component={ProjectsContainer} />
        <Route path={`/investors/:investorId/profile`} component={ProfileContainer} />
        <Route path={`/investors/:investorId/payments`} component={PaymentsContainer} />
        <Route path={`/investors/:investorId/claims`} component={ClaimsContainer} />
      </div>
    );
  }
}

export default InvestorsView;
