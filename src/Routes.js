import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Datos from './components/Datos';


const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component = { Datos } />
        </Switch>
    )
}
export default Routes;