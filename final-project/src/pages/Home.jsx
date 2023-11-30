
import React from 'react'
import Banner from '../features/ui/banner/Banner'
import Cardguide from '../features/ui/card/components/CardGuide'
import CardFunctionTop from '../features/ui/card/components/CardFunctionTop'
import CardFunctionMiddle from '../features/ui/card/components/CardFunctionMiddle'
import CardFunctionBottom from '../features/ui/card/components/CardFunctionBottom'
import CardStack from '../features/ui/carousel/components/CardStack'
import TopButton from '../features/TopButton/TopButton'
import styles from './Home.module.scss'
const Home = () => {

  return (
    <main className={styles.home}>

      <Banner></Banner>
      <Cardguide></Cardguide>
      <CardStack></CardStack>
      <CardFunctionTop></CardFunctionTop>
      <CardFunctionMiddle></CardFunctionMiddle>
      <CardFunctionBottom></CardFunctionBottom>
      <TopButton></TopButton>

    </main>
  )
}


export default Home