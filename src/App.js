import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "./components/Login"
import StudentList from "./components/StudentList"
function App() {
  return (
    <div className="App">
      <div className="blue-bar"/>
      <Router>
        <Switch>
          <Route
            path = "/"
            exact
            render = {()=> <Login/>}
         />
         <Route
            path = "/StudentList"
            exact
            render = {()=> <StudentList/>}
         />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
