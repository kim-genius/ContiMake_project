import React, { useState } from 'react'
import styles from './styles/Tutorial.module.scss'
import TutorialBtn from './components/TutorialBtn'

const tutContents = [
    {
        title: '생성 / 편집',
        text: '생성화면/ 편집화면으로 전환할 수 있습니다.',
        position: { left: '20%', top: '5%' },
        linePosition: 'leftTop'
    },
    {
        title: '프롬프트',
        text: '제작할 콘티의 컷수를 지정합니다. 최소 1컷~ 최대 20컷까지 가능합니다. 직접 입력도 가능합니다.',
        position: { left: '20%', top: '13%' },
        linePosition: 'leftTop'
    },
    {
        title: '인페인팅',
        text: '제작할 콘티의 컷수를 지정합니다. 최소 1컷~ 최대 20컷까지 가능합니다. 직접 입력도 가능합니다.',
        position: { left: '20%', top: '45%' },
        linePosition: 'leftTop'
    },
    {
        title: '텍스트',
        text: '제작할 콘티의 컷수를 지정합니다. 최소 1컷~ 최대 20컷까지 가능합니다. 직접 입력도 가능합니다.',
        position: { left: '20%', top: '45%' },
        linePosition: 'leftBottom'
    },
    {
        title: '재생성',
        text: '생성 하기 버튼을 누릅니다. 생성이 완료되면, 해당 버튼이 초기화 버튼으로 바뀌게 됩니다.결과가 마음에 들지 않을 경우 전체 내용을 초기화 할 수 있습니다.',
        position: { left: '20%', top: '51%' },
        linePosition: 'leftBottom'
    },
    {
        title: '컷 선택',
        text: '생성 하기 버튼을 누릅니다. 생성이 완료되면, 해당 버튼이 초기화 버튼으로 바뀌게 됩니다.결과가 마음에 들지 않을 경우 전체 내용을 초기화 할 수 있습니다.',
        position: { left: '60%', top: '5%' },
        linePosition: 'rightTop'
    },
    {
        title: '저장 / 공유하기',
        text: '생성 하기 버튼을 누릅니다. 생성이 완료되면, 해당 버튼이 초기화 버튼으로 바뀌게 됩니다.결과가 마음에 들지 않을 경우 전체 내용을 초기화 할 수 있습니다.',
        position: { left: '60%', top: '0.5%' },
        linePosition: 'rightTop'
    }
]


const EditTutorial = () => {
    const [index, setIndex] = useState(0);
    const [display, setDisplay] = useState(true);
    // console.log(index, tutContents.length)
    if (!display) {
        return null; // display가 false면 아무것도 렌더링하지 않음
    }
    return (
        <div className={styles.tutorialWrapper}
            onClick={() => { setDisplay(false) }}
            style={{ position: 'absolute' }} >
            <div
                style={{ position: 'relative', left: tutContents[index].position.left, top: tutContents[index].position.top }}
                onClick={(e) => {
                    e.stopPropagation();
                    if (index < tutContents.length - 1) {
                        setIndex(index + 1)
                    } else {
                        setDisplay(false);
                        setIndex(0)
                    }
                }}>

                <TutorialBtn
                    index={index}
                    title={tutContents[index].title}
                    text={tutContents[index].text}
                    position={tutContents[index].position}
                    linePosition={tutContents[index].linePosition}
                />
            </div>
        </div>
    )
}

export default EditTutorial