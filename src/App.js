import React, { Component } from 'react';
import MainTodoFile from '../src/UserPortal/Pages/mainTodoFile';
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from '../src/UserPortal/Components/Navbar';
// import SingleTodo from '../src/UserPortal/Components/Navbar';

class App extends Component {

  render() { 
    return ( 
    <div>
        <MainTodoFile />
    </div>
    );
  }
}
 
export default App;