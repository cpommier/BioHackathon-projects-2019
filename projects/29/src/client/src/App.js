import React,{useReducer} from 'react';
import QuackSearch from './pages/QuackSearch';
import QuackResults from './pages/QuackResults';
import QuackContext from "./context";
import reducer from "./reducer";
import './App.css';
import testdata from './testdata/testdata'
const initialState = {
    query: '',
    expressions: [],
    results: [],
    happy: [],
    sad: [],
    happyState: false,
    sadState: false,
    index: 8,
    inResults: false
}

function App() {
        const [state, dispatch] = useReducer(reducer, initialState)

  return (

        <QuackContext.Provider value={{state, dispatch}}>
            {state.inResults>0?<QuackResults/>:<QuackSearch/>}
        </QuackContext.Provider>
  );
}

export default App;

