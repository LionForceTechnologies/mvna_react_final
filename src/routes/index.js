import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

function App ({match}){
  let locations = window.location.pathname;
  let comp = '';
  let name = "gx-main-content-wrapper";
  if(locations.indexOf('user/admin') !== -1){
  name = ""
  }
  return (
 <div className={name}>
    <Switch>
    {locations.indexOf('user/admin') !== -1 ?   <Route path={`${locations}`} component={asyncComponent(() => import('./editor'))}/> : ''}
      <Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))}/>
      <Route path={`${match.url}drag`} component={asyncComponent(() => import('./drag'))}/>
      <Route path={`${match.url}pagecreation`} component={asyncComponent(() => import('./pagecreation'))}/>      
      <Route path={`${match.url}role`} component={asyncComponent(() => import('./role'))}/>
      <Route path={`${match.url}creation`} component={asyncComponent(() => import('./usercreation'))}/>      
      <Route path={`${match.url}member`} component={asyncComponent(() => import('./member'))}/>      
      <Route path={`${match.url}rolepermission`} component={asyncComponent(() => import('./rolepermission'))}/>      
      <Route path={`${match.url}footer`} component={asyncComponent(() => import('./footer'))}/>      
      <Route path={`${match.url}quicklinks`} component={asyncComponent(() => import('./quicklinks'))}/>      
    </Switch>
  </div>
);
}
export default App;
