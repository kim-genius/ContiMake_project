import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Prompts.module.scss";
import { setPrompt } from "../../../store";
const Prompts = () => {
  const cur_project = useSelector((state) => state.cur_project);
  const promptsList = useSelector((state) => state.cur_project.prompts); // useSelector로 Redux 상태에 접근
  const inputRefs = useRef([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cur_project.imgNums > promptsList.length) {
        const additionalPrompts = Array(cur_project.imgNums - promptsList.length).fill(" ");
        dispatch(setPrompt([...promptsList, ...additionalPrompts]));
    } else if (cur_project.imgNums < promptsList.length) {
        const reducedPrompts = promptsList.slice(0, cur_project.imgNums);
        dispatch(setPrompt(reducedPrompts));
    }
    inputRefs.current = inputRefs.current.slice(0, cur_project.imgNums);
  }, [cur_project.imgNums, dispatch, promptsList]);

  const promptChange = (idx) => {
    const newPromptsList = [...promptsList]; // 기존 배열 복사
    newPromptsList[idx] = inputRefs.current[idx].value; // 복사한 배열 수정
    dispatch(setPrompt(newPromptsList)); // 수정된 배열을 사용하여 액션 디스패치;
  };

  return (
    <div className={styles.inputArea}>
      {cur_project.imgNums > 0
        ? promptsList.map((_, idx) => (
            <textarea
              key={`input-${idx}`}
              placeholder={"컷" + (idx + 1)}
              className={styles.inputBox}
              ref={(el) => (inputRefs.current[idx] = el)}
              onChange={() => {
                promptChange(idx);
              }}
            />
          ))
        : null}
    </div>
  );
};

export default Prompts;
