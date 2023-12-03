import { Layout, Space, Card, Select, Button, Divider, Row, Col } from 'antd'
// import { GiRingingBell  } from "react-icons/gi";
import { FaBitcoin } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { FaEthereum } from "react-icons/fa";
import { TbBrandNem } from "react-icons/tb";
import { SiXrp } from "react-icons/si";
import { TbArrowsDownUp } from "react-icons/tb";
import { SiBitcoincash } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { TbCurrencyEthereum } from "react-icons/tb";
import { FaBell } from "react-icons/fa6";

import LineChart4 from '../LineChart4';
import { useGetCryptosQuery } from '../../features/api/apiSlice'

import './Chart.less'
import React from 'react';
// import CandlestickChart from '../CandlestickChart';

export const Chart = () => {

  console.log(useGetCryptosQuery);

  const {
    data: cryptos,
    isSuccess,
    isError,
    isLoading,
    error
  } = useGetCryptosQuery()

  const cryptoLogos = [
    "FaBitcoin", "SiLitecoin", "FaBitcoin", "SiLitecoin", "FaBitcoin", "SiLitecoin", "FaBitcoin", "SiLitecoin", "FaBitcoin"
  ]

  

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 71, 33, 31],
        fill: true,
        backgroundColor: '#ABDA93',
        borderColor: '#ABC246',
        tension: 0.4, // Adjust the tension for a smooth curve
      },
    ],
  };

  // const candlestickData = {
  //   labels: ['January', 'February', 'March', 'April', 'May'],
  //   datasets: [
  //     {
  //       label: 'Candlestick Chart',
  //       data: [
  //         { t: 0, o: 62, h: 84, l: 59, c: 72 },
  //         { t: 1, o: 70, h: 90, l: 62, c: 80 },
  //         { t: 2, o: 74, h: 86, l: 60, c: 78 },
  //         { t: 3, o: 78, h: 88, l: 66, c: 82 },
  //         { t: 4, o: 82, h: 94, l: 70, c: 90 },
  //       ],
  //     },
  //   ],
  // };


  return (
    <Layout >
                
    {/* <Card className='chart-container'>
      <Space direction="horizontal"> */}
      
      <div className="chart-container">
        <Row gutter={0}>
        <div className="chart-sec-left"> 
          <Col>
            <Card style={{ borderRadius: "0px" }}>                       
                <div className='chart-sec-1'>
                  <div className='chart-sec-1-text'>
                    <h2>BTC</h2>
                    <Space wrap>
                    <div>
                        <Select
                          defaultValue="/JPY"
                          // style={{ width: 120 }}
                          bordered={false}
                          options={[
                            { value: 'jpy', label: '/JPY' },
                            { value: 'jpy2', label: 'JPY2' },
                            { value: 'jpy3', label: 'JPY3' },
                          ]}
                        />                                            
                    </div>
                    </Space>
                  </div>
                
                  <div>
                    <Button className='buy-button'>BUY</Button>                          
                  </div>        
                </div>
                
                <Divider style={{ margin: "0px" }} />
              
                <div className='chart-sec-2'>
                  <div className='chart-sec-2-text'>
                    <h2>721,882</h2>
                    <p className='pink-font'>-4.66%  <GoArrowDown /></p>                  
                  </div>
                  <div className='chart-sec-2-text'>
                    <p className='grey-font'>High</p>                  
                    <h2>725,974</h2>
                  </div>
                  <div className='chart-sec-2-text'>
                    <p className='grey-font'>Low</p>                  
                    <h2>718,000</h2>
                  </div>
                  <div className='chart-sec-2-text'>
                    <p className='grey-font'>24h Volume</p>                  
                    <h2>677.7 BTC</h2>
                  </div>
                  <div className='chart-sec-2-text price-alert'>
                    <p className='grey-font'>Price Alert</p>                  
                    <div>
                      <div className='bell-container'>
                        <FaBell />
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div style={{ width: '100%', minHeight: '302px' }} className='big-chart-container'>
                    <LineChart4 data={chartData} />
                  {/* <CandlestickChart data={candlestickData} /> */}
                </div>
              
            </Card>
          </Col>
        </div>  

          <Col>
          <div>
            <Card style={{ borderRadius: "0px" }}>             
                <div className='chart-sec-right' id='chart-sec'>
                  <div className='chart-sec-right-header'>
                    <h1>Market Cap</h1>
                    <TbArrowsDownUp size={22} style={{ color: "grey" }} />
                  </div>

                  {
                    isSuccess && (                      
                      cryptos.map((cryptoData, index) => (
                          // console.log(cryptoData.logo);
                          <div className='market-cap-div'>
                            <div className='market-cap-div-left'>
                            {/* <DynamicIcon icon={crypto.icon} /> */}
                              <FaBitcoin size={18} style={{ color: "white", backgroundColor: "#FFC246", width: "28px", height: "28px", borderRadius: "50%", padding: "6px" }} />
                            <h2>{cryptoData.symbol}</h2>
                            {/* <h1>{ cryptoLogos[0] }</h1> */}
                            </div>               
                            <div className='market-cap-div-right'>
                              <h2>{ cryptoData.currency }</h2>
                              <p className={ cryptoData.growth > 0 ? 'green-font' : 'pink-font' }>{ cryptoData.growth }%  <GoArrowDown /></p>                 
                            </div>    
                        </div>
                        
                      ))
                      
                    ) 
                  }
                        
                </div>
          
            </Card>     
          </div>   
          </Col>

        </Row>
      </div>

      
  
    </Layout>
  )
}



