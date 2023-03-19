import React from 'react'
import "./preloader.scss"

type Props = {}

const PreLoader = (props: Props) => {
  return (
    <div className='preloader'>
        <div className="container">
            <p>LOGO</p>
            <div className="boxContainer">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    </div>
  )
}

export default PreLoader