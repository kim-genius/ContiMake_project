import React from 'react'
import styles from '../styles/TutorialBtn.module.scss'

const TutorialBtn = ({ title, text, index, position, linePosition }) => {
    let { left, top } = position
    // console.log(left, top)
    if (linePosition == 'leftTop') {
        console.log('')
    }
    return (
        <div style={{ display: 'flex', margin: '0', padding: '0' }}>
            {
                linePosition === 'leftTop'
                    ? (
                        <div style={{ display: 'inline-flex' }}>
                            {/* 점 */}
                            <div style={{ width: '0.5rem', height: '0.5rem', marginTop: '1rem', borderRadius: '50%', backgroundColor: 'white' }}></div>
                            {/* 선 */}
                            <div style={{ width: '2rem', height: '1px', marginTop: '1.25rem', backgroundColor: 'white' }}></div>
                        </div>
                    ) : null
            }
            {
                linePosition === 'leftBottom'
                    ? (
                        <div style={{ display: 'inline-flex' }}>
                            {/* 점 */}
                            <div style={{ width: '0.5rem', height: '0.5rem', marginTop: '13rem', borderRadius: '50%', backgroundColor: 'white' }}></div>
                            {/* 선 */}
                            <div style={{ width: '2rem', height: '1px', marginTop: '13.25rem', backgroundColor: 'white' }}></div>
                        </div>
                    ) : null
            }
            {/**내용부분 */}
            <div style={{ width: '20%' }}><button className={styles.button} style={{ margin: '-1px' }} >
                {parseInt(index) + 1} {title}
                <hr className={styles.line} />
                {text}
            </button></div>
            {
                linePosition === 'rightTop'
                    ? (
                        <div style={{ display: 'inline-flex' }}>
                            {/**선 */}
                            <div style={{ width: '2rem', height: '1px', marginTop: '1.25rem', backgroundColor: 'white' }}></div>
                            {/**점 */}
                            <div style={{ width: '0.5rem', height: '0.5rem', marginTop: '1rem', borderRadius: '50%', backgroundColor: 'white' }}></div>
                        </div>
                    ) : null
            }
        </div >
    )
}

export default TutorialBtn
