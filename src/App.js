import React, { Component } from 'react';
import {createStore} from 'redux';
import './App.css';

function storeReducer(state = {},action){
  switch(action.type){
    case 'ADD_PLAYER':
      return{
        players:[
        action.player,
        ...state.players
        ]
      }
        case 'REMOVE_PLAYER':
          return{
            players:[
           ...state.players.slice(0,action.id),
           ...state.players.slice(action.id +1)
          ]
          }
      
  }
  return state;
}
  let players =[
    'totti',
    'cassano']


    const store = createStore(storeReducer,{players:[...players]});
    console.log(store.getState());
 class App extends Component{
   constructor(){
     super();
     this.state = {
       players :[

       ]
     };
     this.playerInput = React.createRef();
   }
   componentDidMount(){
 
    this.setState({players:[...store.getState().players]})
    store.subscribe(() => {
      console.log(store.getState());
      this.setState({players:[...store.getState().players]})
    }
    );
   }
   addPlayer = () =>{
    const player = this.playerInput.current.value;
    store.dispatch({
      type: 'ADD_PLAYER',
      player
    });
  }
    removePlayer = (i) =>{
      
      store.dispatch({
        type: 'REMOVE_PLAYER',
        id : i
      });
    }
 render(){
   return(
     <div className="App">
    <header className="App-header">

    <h1>Players</h1>
    </header>
    <input ref = {this.playerInput}/>
    <button onClick = {this.addPlayer}>Add</button>
    <ul>{
    this.state.players.map((player,i) => <li key ={i}>{player} <button onClick={ () =>this.removePlayer(i)}>-</button></li>)
    }
    </ul>
    </div>
   );
   }
  }
export default App;
