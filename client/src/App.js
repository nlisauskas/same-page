import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropertiesContainer from './containers/investors/PropertiesContainer'
import TenantsContainer from './containers/investors/TenantsContainer'
import InvestorNavigation from './components/investors/InvestorNavigation'
import Registration from './containers/registration/Registration'
import Login from './containers/registration/Login'

class App extends React.Component {
  constructor(props) {
    super();
  //  this.logOut = this.logOut.bind(this);
  }

  // logOut(event) {
  //   event.preventDefault();
  //   this.props.logOutUser();
  // }

  render() {
    return (
      <div>
      <h1>SamePage Real Estate Management</h1>
      <h2>Getting investors, tenants, contractors, and insurers on the same page.</h2>
      <h1>Investor Views Below</h1>
        <InvestorNavigation />
        <h2>Investor Property View</h2>
        <PropertiesContainer />
        <h2>Investor Financials / Taxes View</h2>
        <h2>Investor Tenants View</h2>
        <TenantsContainer />
        <h2>Investor Maintenance View</h2>
        <h2>Investor User Profile View</h2>
        <h2>Investor Payments View</h2>
        <h2>Investor Claim Management View</h2>
      <h1>Registration / Login Views Below</h1>
        <Registration />
        <Login />
      <h1>Tenant Views Below</h1>
        <h2>Tenant Payments View</h2>
        <h2>Tenant Maintenance View</h2>
        <h2>Tenant Claim Management View</h2>
        <h2>Tenant User Profile View</h2>
      <h1>Contractor Views Below</h1>
        <h2>Contractor Payments View</h2>
        <h2>Contractor Financials / Taxes View</h2>
        <h2>Contractor Jobs View</h2>
        <h2>Contractor Claim Management View</h2>
        <h2>Contractor User Profile View</h2>
      <h1>Insurer Views Below</h1>
        <h2>Insurer Payments View</h2>
        <h2>Insurer Financials / Taxes View</h2>
        <h2>Insurer Claim Management View</h2>
        <h2>Insurer User Profile View</h2>
      <h1>Adjuster Views Below</h1>
        <h2>Adjuster Payments View</h2>
        <h2>Adjuster Financials / Taxes View</h2>
        <h2>Adjuster Claim Management View</h2>
        <h2>Adjuster Claim Documentation View</h2>
        <h2>Adjuster User Profile View</h2>
      </div>
      // <Router>
      //   <div className="container">
      //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/">Home</Link></li>
      //       <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/about">About Us</Link></li>
      //       <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/rounds">Rounds</Link></li>
      //       <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/lifetime">Lifetime Membership</Link></li>
      //       {
      //          this.props.loggedIn || localStorage.getItem('jwt')  ?
      //           <li className="nav-item"><Link exact className="nav-link" to="/logout" onClick={this.logOut}>Log Out</Link></li>
      //         :
      //           <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/login">Log In</Link></li>
      //       }
      //     </ul>
      //   </nav>
      //       {
      //
      //         this.props.loggedIn || localStorage.getItem('jwt')  ?
      //         <div>
      //         <Route exact path="/" component={Dashboard}/>
      //         <Route path="/about" component={About}/>
      //         <Route path="/rounds" component={RoundsContainer}/>
      //         <Route path="/lifetime" component={StripeContainer}/>
      //         </div>
      //       :
      //         <div>
      //         {
      //           this.props.signUpSuccess ?
      //         <Route path="/login" component={Login} />
      //         :
      //         <div>
      //         <Route exact path="/" component={SignupPage}/>
      //         <Route path="/about" component={About}/>
      //         </div>
      //         }
      //
      //         {
      //           this.props.signUpError ?
      //           <strong>Please confirm you entered a valid e-mail address and password.</strong>
      //           :
      //           <p></p>
      //         }
      //         <p>Already have an account? <Link exact className="nav-link" activeClassName="active" to="/login">Log In</Link></p>
      //         <Route path="/login" component={Login} />
      //         </div>
      //       }
      //   </div>
      //   </Router>
    );
  }
}
//
// const mapStateToProps = (state) => {
//   return {  loggedIn: state.users.loggedIn,
//             logInError: state.users.logInError,
//             signUpError: state.users.signUpError,
//             signUpSuccess: state.users.signUpSuccess}
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return { logOutUser: () => dispatch(logOutUser())}
// }

export default App;
