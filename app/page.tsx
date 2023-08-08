'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Search from 'antd/es/input/Search'
import { App, Button, Tooltip } from 'antd'
import { Loading3QuartersOutlined, SearchOutlined } from '@ant-design/icons'
import Table from './components/table/Table'
import { useState } from 'react'
import Link from 'next/link'
import Popup from './components/popup/Popup';

export default function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const handlePopup = () => {
    setButtonPopup(true)
  }

  const onSearch = (value: string) => console.log(value);
  
  // const [showContent, setShowContent] = useState(false);

  // const handleButtonClick = () => {
  //   setShowContent(!showContent); 
  // }
  return (
    <main className={styles.main}>
      <header>
        <Search
          placeholder="ჩაწერეთ ტექსტი"
          allowClear
          enterButton="ძიება"
          size="large"
          onSearch={onSearch}
        />
        <div className={styles.button1}>
          <div>
              <Button onClick={handlePopup}>კონკურსი</Button>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h1>Popup banner</h1>
              </Popup>
              <Link href='/course'>
                  <Button>ძველი აქციები</Button>
              </Link>
            </div>
          <div className={styles.button2}>
            <Button>შერეული კატეგორია</Button>
            <Button>ადგილობრივი</Button>
            <Button>ბავშვის მოვლა</Button>
            <Button>სპეცსაჭიროებები</Button>
            <Button>თავის მოვლა</Button>
            <Button>თმის მოვლა</Button>
            <Button>ბავშვის კვება</Button>
            <Button>პირის ღრუ</Button>
            <Button>დერმატოლოგია</Button>
          </div>
        </div>
        
        <Table />

      </header>
    </main>
  )
}
