import React from 'react'
import Banner from '../features/ui/banner/Banner'
import Cardguide from '../features/ui/card/components/CardGuide'
import CardFunctionTop from '../features/ui/card/components/CardFunctionTop'
import CardFunctionMiddle from '../features/ui/card/components/CardFunctionMiddle'
import CardFunctionBottom from '../features/ui/card/components/CardFunctionBottom'
const Home = () => {
  return (
    <main>

      <Banner></Banner>
      <Cardguide></Cardguide>
      <CardFunctionTop></CardFunctionTop>
      <CardFunctionMiddle></CardFunctionMiddle>
      <CardFunctionBottom></CardFunctionBottom>
      
        
    </main>
  )
}

export default Home