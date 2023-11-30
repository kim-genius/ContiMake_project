import React,{useState} from 'react'
import styles from '../styles/TextBox.module.scss'
const TextBox = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [appear,setAppear] = useState(false)
    const [position, setPosition] = useState({ x: 800, y: 100 });
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setOffsetX(e.clientX - position.x);
      setOffsetY(e.clientY - position.y);
    };
  
    const handleMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        setPosition({
          x: e.clientX - offsetX,
          y: e.clientY - offsetY,
        });
      }
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    return (
      <div className={styles.speechBox}>
<input className={styles.speechBoxContent}
        style={{ top: position.y, left: position.x }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}></input>
      </div>
    );
  }




export default TextBox