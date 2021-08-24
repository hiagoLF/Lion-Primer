import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import HomePage from "./pages/HomePage";
import PrimersPage from "./pages/PrimersPage";

function App() {
   return (
      <div className="App">
         <PageHeader />
         <Router>
            <Switch>
               <Route path="/" exact component={HomePage} />
               <Route path="/primers" component={PrimersPage} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
