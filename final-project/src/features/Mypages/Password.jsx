import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import styles from "./Nav.module.css"
import axios from '../../axios'
const Password = () => {
  const nav = useNavigate();
  const [password,setpassword] = useState('')


  const vaildPassword = ()=>{
    axios.post('/userpage/vaildpassword',{password:password,email:sessionStorage.getItem('email')})
    .then((res)=>{
      if(res.data == 'success'){return(nav('/mypage'))}
      else{return(alert('패스워드가 틀립니다.'))}
    }

    )
  }
  return (

    <div className={styles.PasswordForm}>
      <h4>내정보수정</h4>
      <span>비밀번호</span>
      <input onChange={(e)=>setpassword(e.target.value)}></input>
      <button className={styles.checkpw} onClick={vaildPassword}>확인</button>
    </div>
  )
}

export default Password