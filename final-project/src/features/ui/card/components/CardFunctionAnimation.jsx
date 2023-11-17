import React,{useEffect,useState} from 'react';

const CardFunctionAnimation = (location,animationTure) => {
 
    const [CardPosition, setCardPosition] = useState(0);
    
    console.log(CardPosition)
    function onScroll() {   
        setCardPosition(window.scrollY);
      }
      useEffect(() => {
        window.addEventListener("scroll", onScroll);
    
        if (CardPosition > location) {
            animationTure(true)
          
        } else if (CardPosition < location) {
            animationTure(false)
        }
      }, [CardPosition]);
    
      
}

export default CardFunctionAnimation