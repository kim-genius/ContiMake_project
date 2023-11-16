import React, { useRef } from 'react'
import styles from '../../ui/button/LoginButton.module.scss'

/** 소셜로그인버튼 */
const AuthButton = ({ text, provider, link, children, onClick }) => {
    let color = ''
    if (provider == 'kakao') { color = '#FEE500' }
    else if (provider == 'google') { color = 'white' }

    const buttonRef = useRef(null);

    const loginHandler = () => {
        if (provider == 'google') {
            console.log('google login 시도중..')
            // 다른 이벤트 실행 (예: renderProps.onClick)
            if (children && children.props && children.props.onClick) {
                children.props.onClick();
            }
        }
        else {
            console.log(link)
            window.location.href = link;
        }
    };
    if (onClick) {
        onClick();
    }

    return (
        <button style={{ backgroundColor: color }} className={styles.button} onClick={loginHandler}>
            {text}
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    onClick: loginHandler, // AuthButton이 클릭되면 loginHandler 호출
                })
            )}
        </button>
    )
}

export default AuthButton