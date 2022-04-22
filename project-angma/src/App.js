import React, {useState} from "react";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={DayList}/>
          <Route exact path="/day/:day" component={Day}/>
          <Route component={EmptyPage}/>
        </Switch>
      
      </div>
    </Router>
   
  );
}

export default App;
