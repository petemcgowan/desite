import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PagesList from "./PagesList";
import PageDetails from "./PageDetails";

const Routes = (props) => {
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
            (Page) => Page.name.toLowerCase() === name.toLowerCase()
          );
          return <PageDetails {...props} Page={currentPage} />;
        }}
      />
      <Redirect to="/pages" />
    </Switch>
  );
};
export default Routes;
