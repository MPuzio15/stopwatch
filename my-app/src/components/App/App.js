import React from "react";
import "./App.css";
import Stopwatch from "../StopwatchMain/Stopwatch";
import Timer from '../Timer/Timer';
import ActualTime from '../ActualTime/ActualTime'
import Header from "../Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="wholeApp">
        <Header />
        <section className="mainSection">
          <Switch>
            <Route exact path="/" component={Stopwatch} />
            <Route path='/time' component={ActualTime} />
            <Route path='/timer' component={Timer} />
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
