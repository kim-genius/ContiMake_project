import React, { useState, useEffect } from 'react'
import Nav from '../features/Mypages/Nav';
import Conti from '../features/Mypages/Conti';


const Myconti = () => {

  return (
    <div style={{ display: 'flex' }}>
      <Nav></Nav>
      <Conti></Conti>
    </div>
  )
}

export default Myconti