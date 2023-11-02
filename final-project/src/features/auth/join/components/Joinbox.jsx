import React,{ useState,useEffect } from 'react'
import LoginButton from '../../../ui/button/LoginButton'
import styles from '../styles/Joinbox.module.scss'
import { Link } from 'react-router-dom';
import axios from '../../../../axios'
const Joinbox = () => {
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [nickname,setNickname] = useState('')
   
    
    const sendJoin = ()=>{
      console.log('hi')
        axios.post('/user/join',{email:email,password:password,nickname:nickname})
        .then((res)=>console.log(res))

    }
    const vaildEmail = ()=>{
      axios.post('/user/vaildEmail',{email:email}).then((res)=>{
        if(res.data =='success'){alert('중복된 아이디가 존재합니다.')}
        else{alert('가입 가능한 아이디입니다.')}
      })
    }
  return (
    <section className={styles.joinBackground}>
    <div className={styles.joinBox}>
      <div style={{marginBottom:'10px'}}><img width='100px' src='images/logo.png' alt='logo' /></div>
      {/* <GoogleLoginButton /> */}
      <div className={styles.joinEmail}>
      <input className={styles.formItem} type='email' placeholder='이메일' onChange={(e)=>setEmail(e.target.value)}></input>
      <button onClick={()=>{vaildEmail()}}>확인</button>
      </div>
      <input className={styles.formItem} type='password' placeholder='비밀번호' onChange={(e)=>setPassword(e.target.value)}></input>
      <input className={styles.formItem} type='password' placeholder='비밀번호 확인'></input>
      <input className={styles.formItem}  placeholder='닉네임' onChange={(e)=>setNickname(e.target.value)}></input>
      <button className={styles.joinBtn} type='submit' onClick={()=>{sendJoin()}}>회원가입</button>
      
      <div><p>이미 계정이 있으신가요?  <Link to='/login'>로그인</Link></p></div>
    </div>
</section>
  )
}

export default Joinbox