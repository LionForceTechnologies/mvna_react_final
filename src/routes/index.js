import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

function App ({match}){
  let locations = window.location.pathname;
  let comp = '';
  let name = "gx-main-content-wrapper";
  if(locations.indexOf('/admin/editor') !== -1){
  name = "editors"
  }
  return (
 <div className={name}>
    <Switch>
    {locations.indexOf('/admin/editor') !== -1 ?   <Route path={`${locations}`} component={asyncComponent(() => import('./editor'))}/> : ''}
    <Route path={`${match.url}admin/fileupload`} component={asyncComponent(() => import('./fileupload'))}/>
      <Route path={`${match.url}admin/menu`} component={asyncComponent(() => import('./SamplePage'))}/>
      <Route path={`${match.url}admin/drag`} component={asyncComponent(() => import('./drag'))}/>
      <Route path={`${match.url}admin/pagecreation`} component={asyncComponent(() => import('./pagecreation'))}/>      
      <Route path={`${match.url}admin/role`} component={asyncComponent(() => import('./role'))}/>
      <Route path={`${match.url}admin/creation`} component={asyncComponent(() => import('./usercreation'))}/>      
      <Route path={`${match.url}admin/member`} component={asyncComponent(() => import('./member'))}/>      
      <Route path={`${match.url}admin/rolepermission`} component={asyncComponent(() => import('./rolepermission'))}/>      
      <Route path={`${match.url}admin/footer`} component={asyncComponent(() => import('./footer'))}/>      
      <Route path={`${match.url}admin/quicklinks`} component={asyncComponent(() => import('./quicklinks'))}/>      
    </Switch>
  </div>
);
}
export default App;
