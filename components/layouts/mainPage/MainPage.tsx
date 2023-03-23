"use client"

import React, { useEffect, useState } from 'react'
import FirstSection from '../firstSection/FirstSection'
import Frontpage from '../frontpage/Frontpage'
import LogoCollection from '../logoCollection/LogoCollection'
import MenPopular from '../menPopular/MenPopular'
import PreLoader from '../preloader/PreLoader'
import WomenPopular from '../womenPopular/WomenPopular'

type Props = {
    data: any
}

const MainPage = ({data}:Props) => {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoaded(true)
      }, 3400)
      return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])


  return (
    <div className='mainPage'>
        {!loaded && <PreLoader/> }
        {loaded && 
        <>
          <Frontpage/>
          <FirstSection data={data}/>
          <WomenPopular data={data}/>
          <MenPopular/>
          <LogoCollection/>
        </>
      }
    </div>
  )
}

export default MainPage