import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { Strings } from "../constants";

const Routes = () => {
  return (
    <BrowserRouter>
        <Route
          path={Strings.APPLICATION.ROUTES.HOME}
          exact
          component={HomeScreen}
        />
        <Route
          path={Strings.APPLICATION.ROUTES.DETAILS_SCREEN}
          component={DetailsScreen}
        />
    </BrowserRouter>
  );
};

export default Routes;
