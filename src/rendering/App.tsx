import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';

export const App = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
            </Switch>
        </BrowserRouter>
    );
};
