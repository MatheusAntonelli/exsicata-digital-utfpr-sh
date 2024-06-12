import { useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

import { Suspense } from "react";
import { Camera } from 'three';

function Scene() {
    const fbx = useLoader(FBXLoader, 'models/plant.fbx')
    return <primitive object={fbx} scale={0.05} />
  }

  export default function Hero() {
    return (
        <Canvas
            camera={[0,0,0,0]}
        >
          <Scene />


      </Canvas>
    )
  }
