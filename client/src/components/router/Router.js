import React from 'react'; 
import { Route, Redirect } from 'react-router-dom';  


export default function RouteWrapper({   
  component: Component,   
  isPrivate,   
  ...rest 
}) {   
  const signed = true;    
  
  /**    
  * Redirect user to SignIn page if he tries to access a private route
  * without authentication.    
  */   
  if (isPrivate && !signed) {     
    return <Redirect to="/" />;   
  }    
  /**    
  * Redirect user to Main page if he tries to access a non private route    
  * (SignIn or SignUp) after being authenticated.    
  */   
  if (!isPrivate && signed) {     
    return <Redirect to="/chat" />;   
  }    
  
  /**    
  * If not included on both previous cases, redirect user to the desired route.    
  */   
  return <Route {...rest} component={Component} />; 
}