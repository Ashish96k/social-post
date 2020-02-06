import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const ToolContext = React.createContext();

const ToolProvider = props => {
  const [auth, setAuth] = useState(false);

  const login = () => {
    setAuth(true);
    return <Redirect to="/dashboard" />;
  };

  return (
    <ToolContext.Provider
      value={{ data: 'Hello from context', auth: auth, login: login }}
    >
      {props.children}
    </ToolContext.Provider>
  );
};

export { ToolContext, ToolProvider };
