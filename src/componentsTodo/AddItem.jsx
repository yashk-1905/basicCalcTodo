import styles from "./AddItem.module.css"
import Item from "./Item"

const AddItem = ({array, handleOnDelete}) => {
    let i=0;
    return(
        <ul className={`${styles.addItem}`}>
            {
                array.map((item)=>
                    <Item key={item.name} id={i++} todoDate={item.date} todoName={item.name} onDelete = {()=>handleOnDelete(item)}></Item>
                )
            }
        </ul>
    )
}

export default AddItem;