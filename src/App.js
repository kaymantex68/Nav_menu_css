import React from 'react';
import classes from './App.module.css';
import Navbar  from './components/Navbar/Navbar'
function App() {
  return (
      <div className={classes.Main_windoww}>
        <div className={classes.Header}>
          Header
        </div>
        <div className={classes.Navbar}>
          <Navbar/>
        </div>
        <div className={classes.Content}>
          Content
        </div>
      </div>
      
  );
};
export default App;
