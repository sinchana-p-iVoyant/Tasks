import { Layout } from 'antd'
import './App.css'
import { SideMenu } from './components/SideMenu/SideMenu'
import { ContentSection } from './components/ContentSection/ContentSection'
// import { FileTextOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { FiMessageSquare } from "react-icons/fi";

// import { LineChartComp } from './components/LineChartComp'
// import { LineChart2 } from './components/LineChart2'
// import LineChart3 from './components/LineChart3';

// import 'react-chartjs-2/dist/react-chartjs-2.css';



function App() {

  // Example data
  // const chartData = {
  //   labels: ['January', 'February', 'March', 'April', 'May'],
  //   datasets: [
  //     {
  //       label: 'Monthly Sales',
  //       data: [65, 59, 80, 81, 56],
  //       fill: false,
  //       borderColor: 'rgb(75, 192, 192)',
  //       tension: 0.1,
  //     },
  //   ],
  // };

  return (
    <Layout className='layout-container'>
      <Layout>
        <SideMenu />
        <ContentSection />   
        <div>
          <FloatButton
            icon={<FiMessageSquare />}
            // description="HELP INFO"
            shape="square"
            type="primary"
            style={{ right: 56, }}
          />

        {/* <FloatButton
          href="https://ant.design/index-cn"
          tooltip={<div>custom badge color</div>}
          badge={{ count: 5, color: 'blue' }}
        /> */}
        </div> 
         
      </Layout>

      {/* <div className='chart-div'> */}
        {/* <LineChart3 data={chartData} /> */}
        {/* <LineChartComp />   */}
        {/* <LineChart3 /> */}
      {/* </div>    */}
      {/* <LineChart2 /> */}
       

    </Layout>
  )
}

export default App

