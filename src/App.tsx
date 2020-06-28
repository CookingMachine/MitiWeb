import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "components/Home/Home";
import Layout from "components/Layout/Layout";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
           </Switch>
       </Layout>
    );
}

export default App;