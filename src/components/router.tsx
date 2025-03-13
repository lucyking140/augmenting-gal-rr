import * as React from "react";
import { Switch, Route, Router, useParams } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Response from "../pages/response";
// import Hypertext from "../pages/hypertext";
import ProjectIdeas from "../pages/project-ideas";
import ProjectPlanning from "../pages/project-planning";

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/
  
export default () => (
 
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/response/:week" component={Response} />
      <Route path="/project-ideas" component={ProjectIdeas} />
      {/* <Route path="/hypertext" component={Hypertext} /> --> */}
      <Route path="/project-planning" component={ProjectPlanning} />
    </Switch>
);
