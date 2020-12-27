import React from 'react';
import {Route, Switch} from "react-router-dom";
import Spotlight from "./pages/Spotlight";
import Category from "./pages/Category";



const App = () => {
  return (
    <>
     <Switch>
       <Route exact path = "/" component={Spotlight} />
       <Route exact path = "/Category.js" component={Category} />
     </Switch>
    </>
  );
}; 

export default App;
