import React, { useContext, useEffect } from 'react';
import {ToolContext} from '../store/context'

const Dashboard = () => {

  const context = useContext(ToolContext);

  useEffect(()=>{
    console.log(context)
  }, [])

  return(
    <div>
      Hello from Drawer
    </div>
  );
}

export default Dashboard;