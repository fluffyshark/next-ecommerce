import React from 'react'
import "./navbar.scss"
import IconSearchOutline from "../../../app/assets/icons/icon_search_outline"
import IconBagOutline from "../../../app/assets/icons/icon_bag_outline"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left"><p>LOGO</p></div>
        <div className="middle"><p>MEN</p><p>WOMEN</p><p>KIDS</p></div>
        <div className="right">
          <div className="leftBox"><IconBagOutline style={{color:"#ffffff", hoverColor:"#eb5037"}} /></div>
          <div className="rightBox"><IconSearchOutline style={{color:"#ffffff", hoverColor:"#eb5037"}} /></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar