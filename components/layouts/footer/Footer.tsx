import React from 'react'
import "./footer.scss"
import SocialTwitter from "../../../app/assets/social/social_twitter"
import SocialFacebook from "../../../app/assets/social/social_facebook"
import SocialYoutube from "../../../app/assets/social/social_youtube"
import SocialInstagram from "../../../app/assets/social/social_instagram"
import IconMarker from "../../../app/assets/icons/icon_marker"


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="main">
              <p>FIND A STORE</p>
              <p>BECOME A MEMBER</p>
              <p>FEEDBACK</p>
              <p>PROMO CODES</p>
            </div>
            <div className="gethelp">
              <p>GET HELP</p>
              <p>Order Status</p>
              <p>Shipping and Delivery</p>
              <p>Returns</p>
              <p>Payment Options</p>
              <p>Contact Us</p>
            </div>
            <div className="about">
              <p>ABOUT COMPANY</p>
              <p>News</p>
              <p>Careers</p>
              <p>Investors</p>
            </div>
            <div className="join">
              <p>JOIN US</p>
              <p>Company App</p>
              <p>Company Run Club</p>
              <p>Company Training Club</p>
            </div>
            <div className="social">
              <div className="socialbox">
                <SocialTwitter style={{logoColor:"#000000", logoHoverColor:"#ffffff", circleColor:"#7e7e7e", circleHoverColor:"#1da0f1"}} />
              </div>
              <div className="socialbox">
                <SocialFacebook style={{logoColor:"#000000", logoHoverColor:"#ffffff", circleColor:"#7e7e7e", circleHoverColor:"#3b5999"}} />
              </div>
              <div className="socialbox">
                <SocialYoutube style={{logoColor:"#000000", logoHoverColor:"#ffffff", circleColor:"#7e7e7e", circleHoverColor:"#fe0000"}} />
              </div>
              <div className="socialbox">
                <SocialInstagram style={{logoColor:"#000000", logoHoverColor:"#ffffff", circleColor:"#7e7e7e", circleHoverColor:"#ed2e6e"}} />
              </div>
            </div>
        </div>
        <div className="bottom">
            <div className="locationAndRights">
                <IconMarker style={{color:"#ffffff", hoverColor:"#eb5037"}}/>
                <p>Sweden</p>
                <p>© 2023 Company, Inc. All Rights Reserved</p>
            </div>
            <div className="details">
              <p>Guides</p>
              <p>Terms of Use</p>
              <p>Terms of Sale</p>
              <p>Company Details</p>
              <p>Privacy & Cookie Policy</p>
              <p>Cookie Settings</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer