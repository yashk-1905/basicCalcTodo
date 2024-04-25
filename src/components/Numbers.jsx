// const Numbers = ({number, onHandleClick}) => {
//     // let [arr, setArr] = useState([]);
//     // const handleOnClick = (item) => {
//     //     setArr([...arr,{item}]);
//     //     console.log(arr);
//     // }
//     return(
//     <div className="numbers">
//         {number.map((item)=>(
//             <button 
//             // onClick={()=>{
//             //     setArr([...arr,item])
//             //     console.log(arr);
//             // }}
//             onClick={onHandleClick}
//             >{item}</button>
//         ))}
//     </div>
//     )
// }
// export default Numbers;

import styles from './Numbers.module.css';


const Numbers = ({number, onHandleClick}) => {
    return(
        <div className={`${styles.numbers}`}>
        {number.map((item)=>(
            <button 
            // * ab kyonki humko function me item pass karna hai child se to uske liye ek alag arrow function banana hoga 
            // * usually usme event pass karte hain par abhi jarurat nahi hai to empty hi bana denge
            key={item}
                onClick={()=>onHandleClick(item)}
            >{item}</button>
        ))}
    </div>
    )
}
export default Numbers;