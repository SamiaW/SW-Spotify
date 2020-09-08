//const { createContext } = require("react");

import React, {
    createContext,
    useContext,
    useReducer} 
     from 'react';

     // Preparing data layer
     export const dataLayerContext = createContext();

     // BUILD A PROVIDER
     export const DataLayer = ( { initialState,reducer,children } ) => ( 
         <dataLayerContext.Provider value={useReducer(reducer,initialState)}>
             {children}
         </dataLayerContext.Provider>
     ) 

     export const useDataLayerValue = () => useContext(dataLayerContext);
