// import React from 'react'
// import { Content, Header } from 'antd/es/layout/layout'
import { Content } from 'antd/es/layout/layout'
import { HeaderComponent } from '../HeaderComponent/HeaderComponent'
import { TopSection } from '../TopSection/TopSection'
import { Chart } from '../Chart/Chart'
import { History } from '../History/History'
import { News } from '../News/News'
import './ContentSection.css'

export const ContentSection = () => {
  return (
    <Content className='content' >
      <HeaderComponent />
      <div className='right-container' style={{ backgroundColor: "#f3f0fa" }}>
        <TopSection />
        <Chart />
        <div className='bottom-section-container'>
          <History />
          <News />
        </div>
      </div>
    </Content>
  )
}


