import React from "react"
import { Card } from "antd"
import './News.css'

export const News = () => {

  const newsData = [
    {
      dateTime: "Today 11:36",
      title: "Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users",
      description: "Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…"
    },
    {
      dateTime: "Yesterday",
      title: "Ripple News Today: Ripple is planning to upgrade the technology of the Cryptocurrency"
    },
    {
      dateTime: "Today 11:36",
      title: "Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users",
      description: "Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…"
    },
    {
      dateTime: "Today 11:36",
      title: "Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users",
      description: "Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…"
    }
  ]

  return (
    <div className="news-container-main">
      <Card className="news-container">
        <h2>Crypto Newsfeed</h2>

        <div className='newsfeed-container'>
          {
            newsData.map((news, index) => {
              return <>
              <Card>
                <div className="newsfeed-div" key={index}>
                    <h4>{ news.title }</h4>
                    <h2>{ news.dateTime }</h2>
                    <p>{ news.description }</p>          
                </div>
              </Card>
              </>
            })
          }
        </div>
        
      </Card>
    </div>
  )
}

