import React, { useState } from 'react'
import styles from './Conti.module.css'
import { Button, Card, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Conti() {

  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState();

  const ContiData = [
    { id: 1, title: '콘티제목1', creationDate: '2023-11-01', imageSrc: 'images/images1.jpg' },
    { id: 2, title: '콘티제목2', creationDate: '2023-11-02', imageSrc: 'images/images2.jpg' },
    { id: 3, title: '콘티제목3', creationDate: '2023-11-03', imageSrc: 'images/images3.jpg' },
    { id: 4, title: '콘티제목4', creationDate: '2023-11-04', imageSrc: 'images/images4.jpg' },
    { id: 5, title: '콘티제목5', creationDate: '2023-11-05', imageSrc: 'images/images5.jpg' },
  ]

  const ContiList = () => {

    return (

      ContiData.map((data) => (
        <div key={data.id} className={styles.contiListBox}>
          <Card>
            <img className={styles.contiViewImg} variant="top" src={data.imageSrc} />
            <div className={styles.selectBtn}>
              <button
                onClick={() => { }}
                className={styles.exportBtn}>
                <img src="images/Vector.png" alt="" />
              </button>
              <button className={styles.modifyBtn}>
                <img src="images/Vector1.png" alt="" />
              </button>
            </div>
          </Card>
          <h5>{data.title}</h5>
          <p>{data.creationDate}</p>
        </div>
      ))

    )
  }



  return (
    <div>
      <div className={styles.section}>

        <h4>마이콘티</h4>
        <div className={styles.search}>
          <input placeholder='콘티 제목을 검색'></input>
          <div>|</div>
          <button className={styles.searchBtn} variant="outline-dark">검색</button>
          <div>|</div>
          <ButtonGroup>
            <DropdownButton className={styles.dropBtn} as={ButtonGroup} title="제목" id="bg-nested-dropdown" variant="outline-secondary">
              <Dropdown.Item eventKey="1">수정날짜순</Dropdown.Item>
              <Dropdown.Item eventKey="2">만든날짜순</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <div className={styles.contiBox}>

          <ContiList></ContiList>

          <div onClick={() => navigate('/generate')} className={styles.contiListBox}>
            <Card className={styles.contiViewImg} variant="top">
              <img className={styles.contiImgAdd} src="/images/plus.png"></img>
              <div>새 콘티 생성</div>
            </Card>
          </div>

        </div>
      </div>
    </div >
  );
}

export default Conti;