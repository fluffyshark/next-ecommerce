"use client"

import FirstSection from "@/components/layouts/firstSection/FirstSection"
import Frontpage from "@/components/layouts/frontpage/Frontpage"
import MenPopular from "@/components/layouts/menPopular/MenPopular"
import PreLoader from "@/components/layouts/preloader/PreLoader"
import WomenPopular from "@/components/layouts/womenPopular/WomenPopular"
import { useState } from "react"
import "./page.scss"


export default function Home() {

  const [loaded, setLoaded] = useState(false)

   setTimeout(() => {
     setLoaded(true)
   }, 3400);

  return (
    <main>
      {!loaded && <PreLoader/> }
      {loaded && 
        <>
          <Frontpage/>
          <FirstSection/>
          <WomenPopular/>
          <MenPopular/>
        </>
      }
    </main>
  )
}
