import { createStore } from 'redux';
import './App.css';

let initialState = {
  elma : 0
}

const elmaReducer = (state = initialState, action) => {
  switch(action.type){
    case "EKLE":
      return {elma: state.elma + action.payload}
    case "CIKART":
      return {elma: state.elma - action.payload}
    default:
      return state
  }
}

const store = createStore(elmaReducer)
store.subscribe(()=> console.log("Store değişti ",store.getState()))

store.dispatch({type:"EKLE", payload:3})
//console.log(store.getState())

store.dispatch({type:"EKLE", payload:5})
//console.log(store.getState())

store.dispatch({type:"CIKART", payload:2})
//console.log(store.getState())

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello redux
      </header>
    </div>
  );
}

export default App;
