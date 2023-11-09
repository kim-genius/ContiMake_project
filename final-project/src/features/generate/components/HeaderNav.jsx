import React, { useRef, useState, useEffect } from 'react'
import styles from '../styles/HeaderNav.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTitle } from '../../../store/index';


const HeaderNav = (props) => {
    const inputRef = useRef();
    const [showEditIcon, setShowEditIcon] = useState(true);
    const [changeTitle, setChangeTitle] = useState();
    const dispatch = useDispatch();
    const { setCurrentTitle } = useSelector(state => state.cur_project);

    /** 타이틀 수정 활성화 */
    const editTitle = () => {
        // console.log(setCurrentTitle.title)
        inputRef.current.disabled = null;
        inputRef.current.focus();
        setShowEditIcon(false)
    }
    useEffect(() => {
        console.log(inputRef.current.value)
        // dispatch(setCurrentTitle(inputRef.current.value))
    }, [])

    return (
        <div className={styles.wrapper}>
            <span>
                <input
                    disabled="True"
                    ref={inputRef}
                    type="text"
                    defaultValue={'제목없음'}
                    className={styles.inputArea}
                />
                {showEditIcon &&
                    <button
                        className={styles.editBtn}
                        onClick={() => editTitle()}>
                        <img src='/images/edit_icon.png' alt='titleEditBtn' />
                    </button>
                }
            </span>
            <div>
                <button>마이콘티 저장버튼</button>
                <button>내보내기 버튼</button>
            </div>
        </div>
    )
}

export default HeaderNav