import React from 'react'
import Image from "next/image";
import "./logoCollection.scss"
import LogoNike from "../../../app/assets/logos/logo_nike"
import LogoSaucony from "../../../app/assets/logos/logo_saucony"
import LogoAdidas from "../../../app/assets/logos/logo_adidas"
import LogoBrooks from "../../../app/assets/logos/logo_brooks"
import LogoFredPerry from "../../../app/assets/logos/logo_fredperry"
import LogoPuma from "../../../app/assets/logos/logo_puma"
import LogoVans from "../../../app/assets/logos/logo_vans"
import LogoNB from "../../../app/assets/logos/logo_nb"
import LogoReebook from "../../../app/assets/logos/logo_reebook"
import LogoConverse from "../../../app/assets/logos/logo_converse"

type Props = {}

const LogoCollection = (props: Props) => {
  return (
    <div className='logoCollection'>
        <div className="container">
            <div className="logos">
                <div className="logoItem">
                    <LogoNike style={{color:"#4d4d4d", hoverColor:"#eb5037", width:"104.26", height:"37.17"}} />
                </div>
                <div className="logoItem">
                    <LogoSaucony style={{color:"#4d4d4d", hoverColor:"#eb5037", width:"137.63", height:"24.95"}} />
                </div>
                <div className="logoItem">
                    <LogoAdidas style={{color:"#4d4d4d", hoverColor:"#eb5037", width:"101.88", height:"68.92"}} />
                </div>
                <div className="logoItem">
                    <LogoBrooks style={{color:"#4d4d4d", hoverColor:"#eb5037", width:"182.91", height:"22.16"}} />
                </div>
                <div className="logoItem">
                    <LogoFredPerry style={{color:"#4d4d4d", hoverColor:"#eb5037", width:"75.55", height:"79.95"}} />
                </div>
                <div className="logoItem">
                    <LogoPuma style={{color:"#4d4d4d", hoverColor:"#eb5037", width:"117.64", height:"58.47"}} />
                </div>
                <div className="logoItem">
                    <LogoVans style={{color:"#4d4d4d", hoverColor:"#eb5037", width:"124.91", height:"45.54"}} />
                </div>
                <div className="logoItem">
                    <LogoNB style={{color:"#4d4d4d", hoverColor:"#eb5037", width:"91.74", height:"50"}} />
                </div>
                <div className="logoItem">
                    <LogoReebook style={{color:"#4d4d4d", hoverColor:"#eb5037", width:"108.81", height:"54.59"}} />
                </div>
                <div className="logoItem">
                    <LogoConverse style={{color:"#4d4d4d", hoverColor:"#eb5037", width:"94.97", height:"63.88"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogoCollection