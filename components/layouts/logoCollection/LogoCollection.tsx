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
                    <LogoNike style={{color:"#4d4d4d", hoverColor:"#eb5037"}} />
                </div>
                <div className="logoItem">
                    <LogoSaucony style={{color:"#4d4d4d", hoverColor:"#eb5037"}} />
                </div>
                <div className="logoItem">
                    <LogoAdidas style={{color:"#4d4d4d", hoverColor:"#eb5037"}} />
                </div>
                <div className="logoItem">
                    <LogoBrooks style={{color:"#4d4d4d", hoverColor:"#eb5037"}} />
                </div>
                <div className="logoItem">
                    <LogoFredPerry style={{color:"#4d4d4d", hoverColor:"#eb5037"}} />
                </div>
                <div className="logoItem">
                    <LogoPuma style={{color:"#4d4d4d", hoverColor:"#eb5037"}} />
                </div>
                <div className="logoItem">
                    <LogoVans style={{color:"#4d4d4d", hoverColor:"#eb5037"}} />
                </div>
                <div className="logoItem">
                    <LogoNB style={{color:"#4d4d4d", hoverColor:"#eb5037"}} />
                </div>
                <div className="logoItem">
                    <LogoReebook style={{color:"#4d4d4d", hoverColor:"#eb5037"}} />
                </div>
                <div className="logoItem">
                    <LogoConverse style={{color:"#4d4d4d", hoverColor:"#eb5037"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogoCollection