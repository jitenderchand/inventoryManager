import React from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

import { ROUTES } from "../constant";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <div>inventory page</div>
        </Route>
        <Route path={ROUTES.TYPE} exact>
          <div>filter page</div>
        </Route>
        <Route path={ROUTES.TYPES} exact>
          <div>Manage type page</div>
        </Route>
      </Switch>
    </>
  );
};

export default withRouter(AppRoutes);
