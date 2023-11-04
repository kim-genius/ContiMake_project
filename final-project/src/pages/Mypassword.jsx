import React from 'react'
import Nav from '../features/Mypages/Nav';
import My from '../features/Mypages/My';
import Password from '../features/Mypages/Password';

const Mypassword = () => {
  return (
    <div style={{display: 'flex'}}>
      <Nav></Nav>
      <Password></Password>
    </div>
  )
}

export default Mypassword
