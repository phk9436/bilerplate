import React, {useState} from "react";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={DayList}/>
          <Route exact path="/day/:day" component={Day}/>
          <Route exact path="/create_word" component={CreateWord}/>
          <Route exact path="/create_day" component={CreateDay}/>
          <Route component={EmptyPage}/>
        </Switch>
      
      </div>
    </Router>
   
  );
}

export default App;

//json-server --watch ./src/db/data.json --port 3001