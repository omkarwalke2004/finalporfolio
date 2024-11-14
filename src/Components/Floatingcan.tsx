"use client"
import { forwardRef, ReactNode } from 'react'
import { SodaCan, SodaCanProps } from './Sodacan'
import { Float } from '@react-three/drei'
import { Group } from 'three'

type FloatingCanProps = {
    flavor?:SodaCanProps["flavor"];
    floatSpeed?:number;
    roatationIntensity?:number;
    floatIntensity?:number;
    floatRange?:[number, number];
    children?:ReactNode;
}

const Floatingcan =forwardRef<Group,FloatingCanProps> (({
    flavor ="blackCherry",
    floatSpeed=1.5,
    roatationIntensity=1,
    floatIntensity=1,
    floatRange=[-0.1,0.1],
    children,
    ...props
},ref

) => {
  return (
    <group ref={ref} {...props}>
        <Float

       speed={floatSpeed}
       rotationIntensity={roatationIntensity}
       floatIntensity={floatIntensity}
       floatingRange={floatRange}

       >
        {children}
       <SodaCan flavor={flavor}/>

       </Float>
    </group>
  )
})
Floatingcan.displayName="FloatingCan"

export default Floatingcan