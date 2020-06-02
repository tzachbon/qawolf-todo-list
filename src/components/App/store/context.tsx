import React, { createContext, useContext } from 'react';
import Store from './store';

const StoreContent = createContext({
  store: new Store(),
});

const useStores = () => useContext(StoreContent);

export default useStores;
