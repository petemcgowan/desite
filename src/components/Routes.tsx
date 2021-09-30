import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PagesList from "./PagesList";
import PageDetails from "./PageDetails";
import {RoutesProps, PagesType} from "../interfaces/RoutesInterfaces";


const Routes = (props: RoutesProps) => {
  return (
    <Switch>
      <Route
        exact
        path="/pages"
        render={() => <PagesList pages={props.pages} />}
      />
      <Route
        exact
        path="/pages/:name"
        render={(renderProps) => {
          let name = renderProps.match.params.name;
          let currentPage = props.pages.find(
            (Page:PagesType) => Page.name.toLowerCase() === name.toLowerCase()
          );
          return <PageDetails {...props} Page={currentPage!} />;
        }}
      />
      <Redirect to="/pages" />
    </Switch>
  );
};
export default Routes;
