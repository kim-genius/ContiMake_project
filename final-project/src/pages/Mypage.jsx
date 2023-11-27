
import React, { useState } from 'react'
import Nav from '../features/Mypages/Nav';
import My from '../features/Mypages/My';

const Mypage = () => {
  const [location, setLocation] = useState();

  return (
    <div style={{ display: 'flex' }}>
      <Nav location={location} setLocation={setLocation}></Nav>
      <My location={location} setLocation={setLocation}></My>
    </div>
  )
}

export default Mypage
