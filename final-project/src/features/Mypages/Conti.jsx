import React from 'react'
import S from './Conti.module.css'
import { Button, Card } from 'react-bootstrap';

function Conti() {
  return (
    <div>
      <h3>마이콘티</h3>
      <div className={S.contiBox}>

        <Card>
          <Card.Img style={{ padding: '1vh 1vw' }} variant="top" src="images/logo.png" />
          <Card.Body>
            <Card.Title>콘스프 프로젝트 콘티 변경</Card.Title>
            <Card.Text>
              콘스프 콘티
            </Card.Text>
            <div className={S.selectBtn}>
              <Button variant="dark">내보내기</Button>
              <Button className={S.selectBtn2} variant="dark">삭제</Button>
            </div>
          </Card.Body>
        </Card>



      </div>
    </div>
  );
}

export default Conti;