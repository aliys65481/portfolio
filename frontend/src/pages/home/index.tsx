import React, { useRef } from 'react'
import {Hiro} from '../../components'
import { useGSAP } from '@gsap/react'
import { MainLayout } from '../../layout'
import gsap from 'gsap'
import "./style.css"

export function HomePage() {
  const layoutRef= useRef(null)
  useGSAP(()=>{
    gsap.to('.navbar',{
      background:'#00000010',
      backdropFilter:"blur(10px)",
      duration:.2,
      scrollTrigger:{
        trigger:document.body,
        start:"20px top",
        toggleActions: "play none none reverse",
      }
    })
  },{
    dependencies:[],
    scope:layoutRef
  })
  return (
    <div ref={layoutRef}>
      <MainLayout>
        <Hiro/> 
      </MainLayout>
    </div>
  )
}
