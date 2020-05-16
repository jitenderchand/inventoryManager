import React from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { ROUTES } from "../constant";
import { PermissionDeniedComponent } from "../common/components/PermissionDenied.component";
import { Header } from "../common/components";
import { MangeTypesPage } from '../modules/manage-types/page'

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <div>inventory page</div>
        </Route>
        <Route path={ROUTES.TYPE} exact>
          <div>filter page</div>
        </Route>
        <Route path={ROUTES.TYPES} exact>
          <MangeTypesPage />
        </Route>
        <Route path={"/*"} exact>
          <PermissionDeniedComponent />
        </Route>
      </Switch>
    </>
  );
};

export default withRouter(AppRoutes);
