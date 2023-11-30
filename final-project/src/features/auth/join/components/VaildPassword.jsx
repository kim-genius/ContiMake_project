import React from 'react'
import { useState,useEffect } from 'react'
import styles from '../styles/VaildPassword.module.scss'


const VaildPassword = ({password,samePassword,vaild}) => {
    const [eightPassword,setEightPassword] = useState('rgba(0,0,0,0.2)')
    const [samePasswordColor,setSamePasswordColor] = useState('rgba(0,0,0,0.2)');
    const isNumberEightPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+=])[A-Za-z\d!@#$%^&*()_+=]{8,}$/
   
    /**
        ^: 문자열의 시작을 나타냅니다.
      (?=.*[A-Za-z]): 최소한 하나의 알파벳 문자를 요구합니다.
      (?=.*\d): 최소한 하나의 숫자를 요구합니다.
      (?=.*[@$!%*?&]): 최소한 하나의 특수문자(@, $, !, %, *, ?, &)를 요구합니다.
      [A-Za-z\d@$!%*?&]{8,}: 알파벳, 숫자 및 지정된 특수문자 중에서 8자리 이상을 요구합니다.
      $: 문자열의 끝을 나타냅니다.
     */
    const confirmVaildPassword = () =>{  
      if(isNumberEightPassword.test(password)){
        return(setEightPassword('#FFC478'))
      }if(!isNumberEightPassword.test(password)){
        return(setEightPassword('rgba(0,0,0,0.2)'))
      }
    }


    const confirmSamePassword=()=>{
      if((password == samePassword) && !!password == true){
        
        return(setSamePasswordColor('#FFC478'))
      }if(password !== samePassword ){
       
        return(setSamePasswordColor('rgba(0,0,0,0.2)'))
      }

    }


    useEffect(()=>{return(confirmVaildPassword(),confirmSamePassword())},[password,samePassword])

  return (        
    <div className={styles.VaildPassword}>
        <span style={{color:eightPassword}} >영문/숫자/특수문자 8자리 이상</span>
        <span style ={{color:samePasswordColor}}>일치</span>
    </div>
  )
}

export default VaildPassword