import { createContext, useContext, useReducer } from 'react';


// Initial state
const initialState = {
    count: 0,
  };
  
  // Actions
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  
  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  // Context
  const CounterContext = createContext();
  
  // Provider component
  export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <CounterContext.Provider value={{ state, dispatch }}>
        {children}
      </CounterContext.Provider>
    );
  };
  
  export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
      throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
  };
  