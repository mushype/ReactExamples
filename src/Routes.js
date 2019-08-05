import React, { Suspense, lazy } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* loader component for Suspense*/
import PageLoader from "./components/Common/PageLoader";

import Base from "./components/Layout/Base";
import BasePage from "./components/Layout/BasePage";
// import BaseHorizontal from './components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />;

const SingleView = lazy(() => import("./components/SingleView/SingleView"));
const Login = lazy(() => import("./components/Login/login"));
const SubMenu = lazy(() => import("./components/SubMenu/SubMenu"));
const contacts = lazy(() => import("./components/Contacts/contacts"));
const AxiosScreen = lazy(() => import("./components/AxiosExamples/AxiosScreen"));

const contactDetails = lazy(() =>
  import("./components/Contacts/contactDetails")
);

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
  /* See full project for reference */
];

const Routes = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 500, exit: 500 };

  // Animations supported
  //      'rag-fadeIn'
  //      'rag-fadeInRight'
  //      'rag-fadeInLeft'

  const animationName = "rag-fadeIn";

  if (listofPages.indexOf(location.pathname) > -1) {
    return (
      // Page Layout component wrapper
      <BasePage>
        <Suspense fallback={<PageLoader />}>
          <Switch location={location}>
            {/* See full project for reference */}
          </Switch>
        </Suspense>
      </BasePage>
    );
  } else {
    return (
      // Layout component wrapper
      // Use <BaseHorizontal> to change layout
      <Base>
        <TransitionGroup>
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames={animationName}
            exit={false}
          >
            <div>
              <Suspense fallback={<PageLoader />}>
                <Switch location={location}>
                  <Route path="/singleview" component={waitFor(SingleView)} />
                  <Route path="/submenu" component={waitFor(SubMenu)} />
                  <Route path="/contacts" component={waitFor(contacts)} />
                  <Route path="/login" component={waitFor(Login)} />
                  <Route path="/axiosscreen" component={waitFor(AxiosScreen)} />
                  <Route
                    path="/contactDetails/:id"
                    component={waitFor(contactDetails)}
                  />
                  {/* Anything you pass like /:something, can be accessed in the component rendered above */}
                  <Redirect to="/singleview" />
                </Switch>
              </Suspense>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Base>
    );
  }
};

export default withRouter(Routes);
