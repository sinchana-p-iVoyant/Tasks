// import * as Line from "src\components\Line";
import { Card } from 'antd'
import './TopSection.css'

import { FaBitcoin } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { FaEthereum } from "react-icons/fa";
import { TbBrandNem } from "react-icons/tb";
import { SiXrp } from "react-icons/si";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

import LineChart3 from '../LineChart3';

import { useGetCryptosQuery } from '../../features/api/apiSlice';
import React from 'react';

// import Line from "./Line";

export const TopSection = () => {

  // const components = [
  //   ["Line", Line]
  // ];

    // Example data
  const chartData = [
      {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [65, 59, 80, 81, 56, 71, 33, 31],
          fill: true,
          backgroundColor: '#FFDA93',
          // backgroundColor: [
          //   'rgba(255, 194, 70, 0.2)',
          //   'rgba(249, 200, 102, 0.2)',
          //   'rgba(242, 206, 132, 0.2)',
          //   'rgba(236, 211, 161, 0.2)',
          //   'rgba(229, 216, 189, 0.2)',
          // ],          // backgroundColor: '#EEA241', // Change the fill color
          // borderColor: 'rgb(75, 192, 192)',
          borderColor: '#FFC246',
          tension: 0.4, // Adjust the tension for a smooth curve
        },
      ],
    },
    {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [35, 63, 80, 81, 53, 71, 33, 31],
          fill: true,
          backgroundColor: '#8DA9F1',
          borderColor: '#5470DE',
          tension: 0.4, // Adjust the tension for a smooth curve
        },
      ],
    },
    {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [95, 59, 40, 81, 56, 71, 33, 31],
          fill: true,
          backgroundColor: '#47DFCF',
          borderColor: '#07BEAA',
          tension: 0.4, // Adjust the tension for a smooth curve
        },
      ],
    },
    {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [25, 61, 40, 81, 49, 31, 23, 31],
          fill: true,
          backgroundColor: '#93D7FD',
          borderColor: '#0D99E6',
          tension: 0.4, // Adjust the tension for a smooth curve
        },
      ],
  }
  ];
  
  console.log(chartData);

  chartData.map((data, index) => {
    console.log(data);
    console.log(index);
    
    
  })
  

    // const chartData2 = ;

    // const chartData3 = ;

    // const chartData4 = ;
  
  const {
    data: cryptos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCryptosQuery();
  
  console.log(useGetCryptosQuery());

  console.log(cryptos);
  console.log(isLoading);
  console.log(isSuccess);
  console.log(isError);
  console.log(error);
  
  const limit = 4;                                                                             

  return (
    <div className='top-section-container-main'>
      <div className='welcome-icons-container'>
        <div className='welcome-container'>
          <p>Welcome</p>
          <p>Dashboard</p>
        </div>

        <div className='icons-container'>
          <div className='icons-right squares'><HiOutlineSquares2X2 /></div>
          <div className='icons-right arrow'><SlArrowLeft /></div>
          <div className='icons-right arrow'><SlArrowRight /></div>
        </div>
      </div>
    
      <div className='top-section-container'>

        <div className='card-component'>
              {isSuccess && (
                <>
                  {cryptos.slice(0, limit).map((cryptoData, index) => (
                    <div className='each-card'>
                      <Card id={index}>
                        <div>
                          <div className='top-card'>
                            <div className='top-card-each-col'>
                              <FaEthereum size={20} style={{ color: "white", backgroundColor: "#5470DE", width: "30px", height: "30px", borderRadius: "50%", padding: "6px" }}/>
                            </div>
                            <div className='top-card-text'>
                              <h1>{ cryptoData.symbol }</h1>
                              <p>{ cryptoData.name }</p>
                            </div>
                            <div className="top-card-currency">
                              <h1>{ cryptoData.currency }</h1>
                              <p className={ cryptoData.growth > 0 ? "green-font" : "pink-font" }>{ cryptoData.growth }%<BsArrowUp /></p>
                            </div>
                          </div>
                          
                          <div>
                            <div style={{ width: '100%', height: '100px' }}>
                              <LineChart3 data={chartData[cryptoData.id - 1]} />
                            </div>
                          </div>
                        </div>
                     </Card> 
                    </div>
                  ))}
                </>
              )}
        </div>


      </div>

    </div>
  )
}



// ---------
//  <div>
//   <div className='top-card'>
//     <div className='top-card-each-col'>
//       <FaEthereum size={20} style={{ color: "white", backgroundColor: "#5470DE", width: "30px", height: "30px", borderRadius: "50%", padding: "6px" }}/>
//     </div>
//     <div className='top-card-text'>
//       <h1>ETH</h1>
//       <p>Ethereum</p>
//     </div>
//     <div className="top-card-currency">
//       <h1>¥ 22,370</h1>
//       <p className='green-font'>+0.45% <BsArrowUp /></p>
//     </div>
//   </div>
  
//   <div>
//     <div style={{ width: '100%', height: '100px' }}>
//       <LineChart3 data={chartData2} />
//     </div>
//   </div>

// </div> 
              // ---



// ---

{/* <div className='card-component'>
            <Card>
              {isSuccess && (
                <>
                  {cryptos.slice(0, limit).map((cryptoData, index) => (
                    <div key={index}>
                      <p>hi</p>
                      <p>{cryptoData.name}</p>
                      <p>hi</p>
                    </div>
                  ))}
                </>
              )}
            </Card>
          </div> */}

// ---



