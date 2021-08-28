import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { CurrencyPage } from "./currency";
import { RatePage } from "./rate";
export const Dashboard: React.FC = () => {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${match.path}`} component={RatePage} />
            <Route path={`${match.path}/currency`} component={CurrencyPage} />
        </Switch>
    )
}