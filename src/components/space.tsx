import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { Color, Mesh, PerspectiveCamera, Vector3 } from "three";
import { lerp } from "three/src/math/MathUtils";


export default function Space() {
    return <div className="visual-container">
            <Canvas camera={{fov: 75, near: 0.01, far: 1000, position: [1, 1, 1]}}>
                <ambientLight intensity={0.5}/>
                <pointLight position={[4, Math.sqrt(16/3), -4]} />
                <Planet size={0.5} clouds={500} 
                    color = {new Color(0xC70A80)} />
                {/* <Box position={[1.2, 0, 0]} /> */}
            </Canvas>
    </div>;
}

function Planet(props: {
    size: number,
    clouds: number,
    color: Color | string
}) {
    const planetGroup = useRef<Mesh>();
    const planet = useRef<Mesh>();
    let intro = 0;
    useFrame(()=>{
        if(intro < Math.PI / 2) {
            const i = lerp(0, 1, Math.sin(intro))
            planetGroup.current!!.scale.set(i,i,i)
            planetGroup.current!!.rotation.set(lerp(0, Math.PI / 4, Math.sin(intro)),
                                          -Math.PI / 4,
                                          lerp(0, Math.PI / 4, Math.sin(intro)));
            intro += 0.004;
        }
        planet.current!!.rotateY(0.002);
    })

    const rocks = [];
    for(let i = 0; i < props.clouds; i++) {
        rocks.push(
            <Rock key={i}
             radius={props.size}
             tilt={5}/>
        )
    }

    return (
        <group rotation={[45,-45,45]} position={[0,0.5,-1]} ref={planetGroup}>
        <mesh
            position={[0,0,0]}
            scale={props.size}
            ref={planet}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshPhongMaterial wireframe color={props.color} />
        </mesh>
        {rocks}
        </group>
    )
  }

function Rock(props: {
    radius: number,
    tilt : number,
}) {
    const scale = randn_bm() * 0.4;
    const rock = useRef<Mesh>();
    const speed = randn_bm() * 0.005;

    let positionTime = randn_bm() * Math.PI * 2;
    useFrame(()=> {
        if(!rock.current) return;
        // orbit around orbitPosition in direction angle
        rock.current.rotateY(speed);
        rock.current.position.y = Math.sin(positionTime) * scale;
        positionTime += speed * 0.5;
    })
  
    return (
        <group position={[0,0,0]} rotation={[0, randn_bm() * 360, 0]} ref={rock}>
            <mesh
                position={[props.radius + randn_bm() * 5, 0, 0]}
                scale={scale}>
                <icosahedronGeometry args={[0.3, 0]} />
                <pointsMaterial color={0} />
            </mesh>
        </group>
    )
  }


  function randn_bm(): number {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
    return num
  }