// import Container from './components/Container';
// import Display from './components/Display';
// import Numbers from './components/Numbers';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   let arr = ['C',1,2,'+',3,4,'-',5,6,'*',7,8,'/','=',9,0,'.'];
//   let [inputArr, setInputArr] = useState(['']);
//   let handleOnClick = (item) => {
//         setInputArr([...inputArr,{item}]);
//         console.log(arr);
//   }
//   return (
//     <section className='calculator'>
//       <Container>
//         <div className='calculator-content'>
//           <Display array = {inputArr}></Display>
//           <Numbers number={arr} onHandleClick={handleOnClick}></Numbers>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default App;



/**
 * abhi sabse pehle jo onClick hai vahan se hi hum abhi pass kar denge item ko 
 * ab kyonki humko function me item pass karna hai child se to uske liye ek alag arrow function banana hoga 
 * usually usme event pass karte hain par abhi jarurat nahi hai to empty hi bana denge
 */
import Container from './components/Container';
import Display from './components/Display';
import Numbers from './components/Numbers';
import './App.css';
import { useState } from 'react';
import TodoHeading from './componentsTodo/TodoHeading';
import AddTodo from './componentsTodo/AddTodo';
import AddItem from './componentsTodo/AddItem';
import Welcome from './componentsTodo/Welcome';

function App() {
  let arr = ['C',1,2,'+',3,4,'-',5,6,'*',7,8,'/','=',9,0,'.'];
  let [inputArr, setInputArr] = useState(" ");
  // isme hum empty array pass kar denge use state ki array ke andar
  // hum fir display me inputArr show karva denge 
  let handleOnClick = (item) => {
        console.log(item);
        let newStr = inputArr+item;
        if(item === 'C'){
          newStr= "";
        }else if(item === "="){
          newStr = eval(inputArr);
        }
        setInputArr(newStr);
  }


  // let arrayInitial = [
  //   {
  //     name: "Buy Milk", 
  //     date: "4/10/2023"
  //   }, {
  //     name: "Go to college", 
  //     date: "7/10/2023"
  //   }
  // ];

  let arrayInitial = [];

   let[arrayFinal, setArrayFinal] = useState(arrayInitial);
   const handleNewItem = (todoName,todoDate) => {
        console.log(`new item is ${todoName} and date is ${todoDate}`);
        const newArr= [...arrayFinal, {name: todoName, date:todoDate}];
        setArrayFinal(newArr);
   }

  const handleOnDelete= (item) =>{
      console.log(item);
      let deleteName = item.name;
      const newTodoItem = arrayFinal.filter((x)=> x.name!==deleteName);
      setArrayFinal(newTodoItem);
  }
  return (
    <>
    <section className='calculator'>
      <Container>
        <div className='calculator-content'>
          <Display array = {inputArr}></Display>
          <Numbers number={arr} onHandleClick={handleOnClick}></Numbers>
        </div>
      </Container>
    </section>
    <section className='todo'>
      <Container>
        <TodoHeading></TodoHeading>
        <AddTodo onNewItem = {handleNewItem}></AddTodo>
        {arrayFinal.length === 0 && <Welcome></Welcome>}
        <AddItem array = {arrayFinal} handleOnDelete={handleOnDelete}></AddItem>
      </Container>
    </section>
    </>
  );
}

export default App;
