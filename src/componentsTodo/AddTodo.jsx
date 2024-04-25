/*
import styles from './AddTodo.module.css';

const AddTodo = ({onNewItem}) => {
    return(
        <div className={`${styles.addTodo}`}>
            <input className='inputTodo' type="text" placeholder='Enter Todo Here' />
            <input className='inputDate' type="date"/>
            <button className='buttonAdd' onClick={()=>onNewItem("a","b")}>Add</button>
        </div>
    )
}

export default AddTodo;
*/

// ab humko daalna hai dono input ka value to uske liye humko useState() ka use karna padega ek date or ek name ke liye

import { useState } from 'react';
import styles from './AddTodo.module.css';
import { IoAddCircleOutline } from "react-icons/io5";

const AddTodo = ({onNewItem}) => {
    // let [name, setName] = useState();
    // let [date, setDate] = useState();
    /**
     * idhar aise useState ko khali chor diya humne par input me to humne value di hai to uncontrolled controlled input ka error aa raha hai to isko hum khali string initially de denge
     */

    let [tName, setName] = useState("");
    let [tDate, setDate] = useState("");
    let handleNameChange = (event) => {
        // console.log(event.target.value);
        setName(event.target.value);
    }
    let handleDateChange = (event) => {
        // console.log(event.target.value);
        setDate(event.target.value);
    }
    let handleButtonClicked = (event) => {
        onNewItem(tName,tDate);
        /**
         * ab ek baar add button click ho gaya value bhij gayi
         * to setTodoName or setDate me blank string "" pass kar denge 
         */
        setName("");
        setDate("");

        /**
         * *****
         * par itna karne se kaam nahi chalega 
         * input me change chahiye to 
         * input ke value me name or date ka value daalna hoga 
         */

        //////////////////
          // console.log(event);
        /**
         * form by default sends whatever data it has to the host name specified in action
         * if none is specified then it sends to the local host only now since it is sending the data
         * as soon as it is getting it so we are unable to log it as well as data in the Item li disappears 
         * as soon as it appears
         */
        event.preventDefault();
        // that's why we need to prevent the default behaviour of our form to retain the data 
        console.log(event);
    }
    // return(
    //     <div className={`${styles.addTodo}`}>
    //         {/* 
    //             HERE value = {name}
    //             and the above function handleNameChange 
    //             are asigning the same value within input 
    //             so doing any change in handleNameChange will change the value immediately
    //             thus like twins they are changes to one affects the other

    //             this is called two way binding 
    //         */}
    //         <input className='inputTodo' type="text" placeholder='Enter Todo Here' value={tName} onChange = {handleNameChange} />
    //         <input className='inputDate' type="date" value={tDate} onChange = {handleDateChange}/>
    //         {/* <button className='buttonAdd' onClick={()=>onNewItem("a","b")}>Add</button> */}
    //         <button className='buttonAdd' onClick={handleButtonClicked}>
    //             <IoAddCircleOutline />
    //         </button>
    //     </div>
    // )


    let handleOnSubmit = (event) => {
        // console.log(event);
        /**
         * form by default sends whatever data it has to the host name specified in action
         * if none is specified then it sends to the local host only now since it is sending the data
         * as soon as it is getting it so we are unable to log it as well as data in the Item li disappears 
         * as soon as it appears
         */
        event.preventDefault();
        // that's why we need to prevent the default behaviour of our form to retain the data 
        console.log(event);
    }
    //using form
    return(
        <form className={`${styles.addTodo}`} 
        // onSubmit={(event) => handleButtonClicked(event)}
        // yahan onSubmit button me bhi laga sakte hain par vo sensible baat nahi hai kyonki jab form bana rahe hain to pura ka pura form submit hota hai or apna data action me jo value hai vahan le jata hai to onSubmit ke liye direct form me hi likh sakte hain
            onSubmit={handleButtonClicked}
            // event yahan se pass karne ki jarurat nahi hai direct function ke parameter me likh sakte hain
        >
            <input className='inputTodo' type="text" placeholder='Enter Todo Here' value={tName} onChange = {handleNameChange} />
            <input className='inputDate' type="date" value={tDate} onChange = {handleDateChange}/>
            <button className='buttonAdd' 
            // type='submit'
            // by default yahi type hota hai button ka form me agar click ya koi or type ka button chahiye to idhar type specify karna hoga

            // onClick={handleButtonClicked} 
            /*onSubmit={handleOnSubmit}*/
            // in here we can give onSubmit instead of onClick instead of onClick
            // infact we dont't even need to give this onSubmit over here it comes by default for every button
            // within form so we can directly submit form 
            // as you can see above onSubmit is property of form as well so we can directly give it over there
            // instead of giving in the button
            >
                <IoAddCircleOutline />
            </button>
        </form>
    )
}

export default AddTodo;
