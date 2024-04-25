import styles from "./Item.module.css";
import { IoRemoveCircle } from "react-icons/io5";

const Item = ({ id, todoName, todoDate, onDelete}) => {
    return(
        <li id={id} className={`${styles.listItem} list-item`}>
            <span>{todoName}</span>
            <span>{todoDate}</span>
            <button className="buttonDelete" onClick={onDelete}>
                <IoRemoveCircle />
            </button>
        </li>
    )
}

export default Item;