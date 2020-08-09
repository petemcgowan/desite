import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PagesList from "./PagesList";
import PageDetails from "./PageDetails";

class Routes extends Component {
  render() {
    const getPage = props => {
      let name = props.match.params.name;
      let currentPage = this.props.pages.find(
        Page => Page.name.toLowerCase() === name.toLowerCase()
      );
      return <PageDetails {...props} Page={currentPage} />;
    };
    return (
      <Switch>
        <Route
          exact
          path='/pages'
          render={() => <PagesList pages={this.props.pages} />}
        />
        <Route exact path='/pages/:name' render={getPage} />
        <Redirect to='/pages' />
      </Switch>
    );
  }
}
export default Routes;
