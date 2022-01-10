import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Results } from './Results'

export function Routes() {
    return (
        <div className="p-4">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search" />
                </Route>
                <Route exact path={['/search', '/images', '/videos', '/news']}>
                    <Results />
                </Route>
            </Switch>
            {/* <h2>Routes</h2> */}
        </div>
    )
}
