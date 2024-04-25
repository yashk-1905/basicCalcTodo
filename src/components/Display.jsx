// const Display = ({array}) => {
//     return(
//       array.map((item)=>
//       <input className='display' type='text' value={item} readOnly></input>
//       )
//     )
// }

// export default Display;
import styles from './Display.module.css';

const Display = ({array}) => {
  return(
    <input className={`${styles.display}`} type='text' value={array} readOnly></input>
  )
}

export default Display;