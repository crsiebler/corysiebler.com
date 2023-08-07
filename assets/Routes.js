import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { OktaAuth } from '@okta/okta-auth-js';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { oktaAuthConfig } from 'constants/oktaConstants';
import PageLayout from 'components/PageLayout';

const LandingPage = React.lazy(() => import('views/LandingPage'));
const PortfolioPage = React.lazy(() => import('views/PortfolioPage'));
const ResumePage = React.lazy(() => import('views/ResumePage'));
const LoginPage = React.lazy(() => import('views/LoginPage'));

const oktaAuth = new OktaAuth(oktaAuthConfig);

const Routes = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  return (
    <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler}>
      <React.Suspense
        fallback={
          <PageLayout>
            <></>
          </PageLayout>
        }
      >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login/callback" component={LoginCallback} />
          <Route path="/login" component={LoginPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/resume" component={ResumePage} />
          <SecureRoute path="/admin" component={LandingPage} />
          <Redirect path="/contact" to="/" />
          <Redirect path="/about" to="/" />
          <Redirect to="/" />
        </Switch>
      </React.Suspense>
    </Security>
  );
};

export default Routes;
