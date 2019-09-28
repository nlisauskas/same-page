import React from 'react';
import FinancialsContainer from '../../containers/adjusters/FinancialsContainer'
import ProfileContainer from '../../containers/adjusters/ProfileContainer'
import PaymentsContainer from '../../containers/adjusters/PaymentsContainer'
import ClaimsContainer from '../../containers/adjusters/ClaimsContainer'
import DocumentsContainer from '../../containers/adjusters/DocumentsContainer'
import AdjusterNavigation from '../../components/adjusters/AdjusterNavigation'
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'

class AdjustersView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      <h1>Adjuster Views Below</h1>
          <AdjusterNavigation />
          <Route path={`/adjusters/:adjusterId/payments`} component={PaymentsContainer} />
          <Route path={`/adjusters/:adjusterId/financials`} component={FinancialsContainer} />
          <Route path={`/adjusters/:adjusterId/claims`} component={ClaimsContainer} />
          <Route path={`/adjusters/:adjusterId/documentation`} component={DocumentsContainer} />
          <Route path={`/adjusters/:adjusterId/profile`} component={ProfileContainer} />
      </div>
    );
  }
}

export default AdjustersView;
