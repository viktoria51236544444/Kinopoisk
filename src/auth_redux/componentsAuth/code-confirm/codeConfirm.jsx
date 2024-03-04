import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { confirmUserCode } from "../../store/userSlice";
import styles from "../confirmEmail/confirmEmail.module.css";

export const CodeConfirm = ({ num }) => {
  const focusRefs = useRef([]);
  const initialValues = Array(num).fill("");
  const dispatch = useDispatch();
  const [codeInputs, setCodeInputs] = useState(initialValues);
  console.log("codeInputs", codeInputs);
  const onChange = ({ target: { value } }, idx) => {
    console.log("idx", idx);
    const updatedInputs = codeInputs.map((inp, index) => {
      if (index === idx) {
        return value;
      }

      const nextRef = focusRefs.current[idx + 1]?.current;
      if (nextRef) {
        nextRef.focus();
      }

      return inp;
    });

    setCodeInputs(updatedInputs);
    dispatch(confirmUserCode(updatedInputs.join("")));
  };

  focusRefs.current = Array(num)
    .fill(0)
    .map((ref, index) => (focusRefs.current[index] = React.createRef()));

  console.log("focusRefs", focusRefs);

  useEffect(() => {
    focusRefs.current[0]?.current?.focus();
  }, []);

  return (
    <div className={styles.codeInputContainer}>
      {codeInputs.map((val, idx) => {
        return (
          <input
            key={idx}
            className={styles.form__input}
            type="text"
            maxLength={1}
            value={val}
            ref={focusRefs.current[idx]}
            onChange={(e) => onChange(e, idx)}
          />
        );
      })}
    </div>
  );
};
