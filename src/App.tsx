import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import HomePage from "./pages/HomePage";
import PrimersPage from "./pages/PrimersPage";
import "./index.css";
import CreditsPage from "./pages/CreditsPage";
import LearnPCR from "./pages/LearnPCR";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/primers" component={PrimersPage} />
          <Route path="/about-pcr" component={LearnPCR} />
          <Route path="/credits" exact component={CreditsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
