import React from 'react'
import styles from './Conti.module.css'
import { Button, Card, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

function Conti() {
  return (
    <div>
      <div className={styles.section}>

        <div className={styles.search}>
          <h4>마이콘티</h4>
          <input placeholder='콘티 제목을 검색'></input>
          <Button className={styles.searchBtn}  variant="outline-dark">검색</Button>
          <ButtonGroup>
            <DropdownButton className={styles.dropBtn} as={ButtonGroup} title="제목" id="bg-nested-dropdown">
              <Dropdown.Item eventKey="1">수정날짜순</Dropdown.Item>
              <Dropdown.Item eventKey="2">만든날짜순</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>


        <div className={styles.contiBox}>

          <div className={styles.contiListBox}>
            <Card>
              <Card.Img className={styles.contiViewImg} variant="top" src="images/logo.png" />
              <div className={styles.selectBtn}>
                <Button variant="none">📂</Button>
                <Button variant="none">📬</Button>
                <Button variant="none">📝</Button>
              </div>
            </Card>
            <h4>콘티제목</h4>
            <p>콘티 생성일</p>
          </div>

          <div className={styles.contiListBox}>
            <Card>
              <Card.Img className={styles.contiViewImg} variant="top" src="images/logo.png" />
              <div className={styles.selectBtn}>
                <Button variant="none">so</Button>
                <Button variant="none">qh</Button>
              </div>
            </Card>
            <h4>콘티제목</h4>
            <p>콘티 생성일</p>
          </div>

          <div className={styles.contiListBox}>
            <Card>
              <Card.Img className={styles.contiViewImg} variant="top" src="images/logo.png" />
              <div className={styles.selectBtn}>
                <Button variant="none">so</Button>
                <Button variant="none">qh</Button>
              </div>
            </Card>
            <h4>콘티제목</h4>
            <p>콘티 생성일</p>
          </div>

          <div className={styles.contiListBox}>
            <Card>
              <Card.Img className={styles.contiViewImg} variant="top" src="images/logo.png" />
              <div className={styles.selectBtn}>
                <Button variant="none">so</Button>
                <Button variant="none">qh</Button>
              </div>
            </Card>
            <h4>콘티제목</h4>
            <p>콘티 생성일</p>
          </div>

          <div className={styles.contiListBox}>
            <Card>
              <Card.Img className={styles.contiViewImg} variant="top" src="images/logo.png" />
              <div className={styles.selectBtn}>
                <Button variant="none">so</Button>
                <Button variant="none">qh</Button>
              </div>
            </Card>
            <h4>콘티제목</h4>
            <p>콘티 생성일</p>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Conti;
