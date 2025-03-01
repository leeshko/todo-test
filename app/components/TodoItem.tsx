import React, { FC } from "react";
import styles from "./toDoItem.module.css";
interface ToDoItemProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckHandler: (id: string) => void;
  onRemoveHandler: (id: string) => void;
}

const ToDoItem: FC<ToDoItemProps> = ({
  id,
  label,
  checked,
  onCheckHandler,
  onRemoveHandler,
}) => {
  return (
    <div className={styles.toDoItem}>
      <label>
        <input type="checkbox" checked={checked} onChange={() => onCheckHandler(id)}/>
        <span className={styles.label}>{label} </span>
      </label>
      <div onClick={() => onRemoveHandler(id)} className={styles.close}>
        x
      </div>
    </div>
  );
};

export default ToDoItem;
