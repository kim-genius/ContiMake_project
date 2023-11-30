import React, { useEffect, useState } from 'react';
import styles from './TopButton.module.css';

function TopButton() {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const handleShowButton = () => {
            window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
        };

        console.log(window.scrollY);
        window.addEventListener('scroll', handleShowButton);
        return () => {
            window.removeEventListener('scroll', handleShowButton);
        };
    }, []);
    return (
        showButton && (
            <div className={styles.scroll}>
                <button onClick={scrollToTop}><img className={styles.upArrow} src={'/images/uparrow.png'}></img></button>
            </div>
        )
    );
}

export default TopButton;