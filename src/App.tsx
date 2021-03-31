import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect, useRouteMatch} from "react-router-dom";
import {HomePage} from "routes/Home";

function App() {

    const [page, setPage] = useState('app');
    const match = useRouteMatch('/');
    const handleChangePage = (page:string)=>{
                                            setPage(page);
                                            }
    
return (
 
<Switch>
  <Route path = "/404" render={()=>{
            return (<h1>404 Not found</h1>);
        }} />
     
         <>
     <Switch>    
     <Route path="/" exact component={HomePage} />
     <Route path="/calc" component={HomePage} /> 
     <Route render={()=><Redirect to = "/404" />} />  
      </Switch>    
         </>
    
     
  </Switch>       
 
  );
}

export default App;
