import { FC, useState } from "react";
import styles from "./inputText.module.css";

export interface AddInputProps {
  onAddTodo: (label: string) => void;
}

const InputText: FC<AddInputProps> = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
    onAddTodo(inputText);
    setInputText("");
  };

  return (
    <div className={styles.inputText}>
      <form onSubmit={submithandler}>
        <label htmlFor="">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            type="submit"
            // onClick={() => {
            //   console.log(88888, inputText);
            //   setInputText("");
            // }}
          >
            submit
          </button>
        </label>
      </form>
    </div>
  );
};

export default InputText;
