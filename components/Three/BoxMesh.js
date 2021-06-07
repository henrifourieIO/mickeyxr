import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {useSpring, animated} from 'react-spring';


export default function BoxMesh({theme , setTheme, position}) {
    const mesh = useRef();

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const color = `${theme ? "#160121" : "#fff"}`

    useFrame((state, delta) => (
        mesh.current.rotation.x += 0.01,
        mesh.current.rotation.y += 0.01,
        mesh.current.rotation.z += 0.01
        ))

    return (
        <mesh 
        ref={mesh}
        scale={ 2 }
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        >
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}