import { useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

import { Suspense } from "react";

function Scene() {
    const fbx = useLoader(FBXLoader, 'models/plant.fbx')
    return <primitive object={fbx} />
  }

  export default function Hero() {
    return (
        <Canvas>
        
          <Scene />


      </Canvas>
    )
  }
