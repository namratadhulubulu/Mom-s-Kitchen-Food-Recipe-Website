import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn'; // Make sure this path is correct
import Login from './components/Login';     // Make sure this path is correct
import ShareRecipe from '.ShareRecipe'; // Assuming you have this component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/login" component={Login} />
        <Route path="/share-recipe" component={ShareRecipe} />
      </Switch>
    </Router>
  );
}

export default App;

