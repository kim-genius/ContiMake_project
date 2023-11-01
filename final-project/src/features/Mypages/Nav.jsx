import React from 'react'
import "./Nav.scss"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navBox">

      <div className="user">
        <div className="userImg"></div>
        <h4 claStylessName="userList">
          hansol
        </h4>
      </div>
      <Link to='/mypassword'><div className="myInfo"><img src='images/icon1.png'></img>내정보수정</div></Link>
      <Link to='/myconti'><div className="contiBox"><img src='images/icon2.png'></img>마이콘티</div></Link>
    </nav >
  )
}

export default Nav