import React, { createContext, useContext, useState } from 'react';

interface IProps {}

const UserContext = createContext<string | null>(null);

const UserPage: React.FC<IProps> = () => {
  const context = useContext(UserContext);
  return <div>{context}</div>;
};

const NewComponent: React.FC = () => {
  const context = useContext(UserContext);

  return (
    <div className="bg-red-500">
      This is NewComponent {context}
      <br />
    </div>
  );
};

const Test: React.FC<IProps> = () => {
  const [hour, setHour] = useState('Initial value');

  const handleClick = () => {
    setHour(new Date().toLocaleTimeString());
  };

  setInterval(() => {
    setHour(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <UserContext.Provider value={hour}>
      <div className="text-center">
        <h1>Hello From Home Page</h1>
        <button onClick={handleClick}>Change Value</button>
        <UserPage />
        <NewComponent />
      </div>
    </UserContext.Provider>
  );
};

export default Test;
