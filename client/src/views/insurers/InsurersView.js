import React from 'react';
import FinancialsContainer from '../../containers/insurers/FinancialsContainer'
import ProfileContainer from '../../containers/insurers/ProfileContainer'
import ClaimsContainer from '../../containers/insurers/ClaimsContainer'
import PaymentsContainer from '../../containers/insurers/PaymentsContainer'
import InsurerNavigation from '../../components/insurers/InsurerNavigation'
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

class InsurersView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Insurers' View Below</h1>
      <InsurerNavigation />
      <Route path={`/insurers/:insurerId/payments`} component={PaymentsContainer} />
      <Route path={`/insurers/:insurerId/financials`} component={FinancialsContainer} />
      <Route path={`/insurers/:insurerId/claims`} component={ClaimsContainer} />
      <Route path={`/insurers/:insurerId/profile`} component={ProfileContainer} />
      </div>
    );
  }
}

export default InsurersView;
