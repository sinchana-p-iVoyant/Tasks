// import React from 'react'
import { Card, Input, Avatar, Badge } from 'antd'
import { BsFilterRight } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import './HeaderComponent.css'

export const HeaderComponent = () => {
  return (
    <Card>
      <div className="header-container">
        <div className='header-container-left'>
          <div className="header-icons">
            <BsFilterRight size={21}  />
          </div>
          <div className="header-icons">
            <IoCubeOutline size={21}  />
          </div>
          <div className="header-icons">
            <Input size="small" placeholder="search" prefix={<CiSearch />} />
          </div>       
        </div>

        <div className='header-container-right'>
          <div className="header-icons">
            <Avatar src="https://th.bing.com/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          </div>
          <div className="header-icons">
            <IoSettingsOutline size={24} />
          </div>
          <div className="header-icons">
            <Badge count={5} color='#F56C89'>
              <HiOutlineSpeakerphone size={24} />
            </Badge>
          </div>
          <div className="header-icons">
            <Avatar src="https://th.bing.com/th/id/OIP.-UhCusNp-fNE_DruwEZkXwHaF3?pid=ImgDet&rs=1"  />
          </div>     
        </div>
      </div>
    </Card>
  )
}

