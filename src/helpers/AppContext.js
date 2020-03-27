import React from 'react';

const AppContext = React.createContext({});

export const AppConsumer = AppContext.Consumer;
export const AppProvider = AppContext.Provider;
export default AppContext;
