import React from 'react';
// import UpdateObjectState from './components/UpdateObjectState';
import ToDoListApp from './components/ToDoListApp/ToDoListApp';
import UseEffectIncDec from './components/UseEffectIncDec/UseEffectIncDec';
// import List from "./List/List";
// import Button from "./Button/Button";
// import ProfilePitcure from "./components/ProfilePitcure";
// import MyComponent from './components/MyComponent';
// import Counter from './components/Counter/useStatePractice';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import UpdateObjectUseState from './components/UpdateObjectUseState';
// import UpdateArrayState from './components/UpdateArrayState';

function App() {
  return(
     <>
        <UseEffectIncDec/>
     </>
  )
}

export default App





  // const fruits = [{id:1,name:"Apple", calories:95},
  //                   {id:2,name:"Banana", calories:105},
  //                   {id:3,name:"Orange", calories:45},
  //                   {id:4,name:"Cocunut", calories:159},
  //                   {id:5,name:"Pineapple", calories:37}];

  // const vegetables = [{id:6,name:"Tomato", calories:95},
  //                   {id:7,name:"Onion", calories:105},
  //                   {id:8,name:"Bringil", calories:45},
  //                   {id:9,name:"Aalo", calories:159},
  //                   {id:10,name:"Bindi", calories:37}];

  // return(
  //   <>
  //   {/* <List items={fruits} category="Fruits"/>
  //   <List items={vegetables} category="Vegetables"/> */}
    
  //   {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
  //   {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
  //   </>
  // )