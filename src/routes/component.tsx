import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ContentContainer, ReduxIsLoading, RoutesNavBar } from '../layout';

const News: any = React.lazy(() => import('../pages/News/connected'));
const NotFound: any = React.lazy(() => import('../pages/NotFound/component'));
const Pictures: any = React.lazy(() => import('../pages/Pictures/connected'));
const PicturesUpload: any = React.lazy(() => import('../pages/Pictures/Upload/connected'));

const SFCRoutes: React.SFC = () => (
  <>
    <RoutesNavBar />
    <React.Suspense fallback={
      <ContentContainer>
        <ReduxIsLoading isLoading={true} />
      </ContentContainer>
    }>
      <ReduxIsLoading isLoading={false} />
      <Switch>
        <Route
          key="Home"
          exact={true}
          path="/"
          component={News}
        />
        <Route
          key="Random"
          exact={true}
          path="/random"
          component={News}
        />
        <Route
          key="Pictures"
          exact={true}
          path="/pictures"
          component={Pictures}
        />
        <Route
          key="PicturesUpload"
          exact={true}
          path="/pictures/upload"
          component={PicturesUpload}
        />
        <Route
          key="NotFound"
          component={NotFound}
        />
      </Switch>
    </React.Suspense>
  </>
)

export default SFCRoutes;
