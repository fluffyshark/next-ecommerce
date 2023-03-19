"use client"

import React from 'react'
import Text1 from './components/Text1'
import Text2 from './components/Text2'
import Text3 from './components/Text3'
import Text4 from './components/Text4'
import Text5 from './components/Text5'
import "./frontpage.scss"

type Props = {}

const Frontpage = (props: Props) => {
  return (
    <div className='frontpage'>
        <div className="textContainer">
          <Text1/>
          <Text2/>
          <Text3/>
          <Text4/>
          <Text5/>
        </div>
    </div>
  )
}

export default Frontpage