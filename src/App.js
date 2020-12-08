import addEmployee from './Pages/addEmployee/addEmployee';
import employeeList from './Pages/employeeList/employeeList';
import employee from './Pages/employee/employee';
// import About from './components/About';
// import Shop from './components/Shop';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
    <Switch>
        <Route path="/" component={employeeList} exact />
        <Route path="/addEmployee" component={addEmployee} />
        <Route path="/employee" component={employee} />
    </Switch>
</main>
  );
}

export default App;

