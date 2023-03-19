"use client"

import Frontpage from "@/components/layouts/frontpage/Frontpage"
import PreLoader from "@/components/layouts/preloader/PreLoader"
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
      {loaded && <Frontpage/>}
    </main>
  )
}
