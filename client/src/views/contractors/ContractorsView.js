import React from 'react';
import FinancialsContainer from '../../containers/contractors/FinancialsContainer'
import ProfileContainer from '../../containers/contractors/ProfileContainer'
import ProjectsContainer from '../../containers/contractors/ProjectsContainer'
import PaymentsContainer from '../../containers/contractors/PaymentsContainer'
import ClaimsContainer from '../../containers/contractors/ClaimsContainer'
import ContractorNavigation from '../../components/contractors/ContractorNavigation'
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

class ContractorsView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Contractor Views Below</h1>
          <ContractorNavigation />
          <Route path={`/contractors/:contractorId/payments`} component={PaymentsContainer} />
          <Route path={`/contractors/:contractorId/financials`} component={FinancialsContainer} />
          <Route path={`/contractors/:contractorId/projects`} component={ProjectsContainer} />
          <Route path={`/contractors/:contractorId/claims`} component={ClaimsContainer} />
          <Route path={`/contractors/:contractorId/profile`} component={ProfileContainer} />
      </div>
    );
  }
}

export default ContractorsView;
