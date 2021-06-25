import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three';
import { useControls } from 'leva';


export default function BoxMesh({theme , setTheme, position}) {
    const mesh = useRef();

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const color = `${theme ? "#160121" : "#fff"}`

    const sizeHover = useSpring( { scale: hovered ? 2 : 1.5 } )

    //Mouse Position
    const useMousePos = () => {
        const [mousePos, setMousePos] = useState({x: null, y: null});

        const updateMousePos = ev => {
            setMousePos({ x: ev.clientX, y: ev.clientY });
        }

        useEffect(() => {
            window.addEventListener("mousemove", updateMousePos);

            return () =>window.removeEventListener("mousemove", updateMousePos)
        }, [])

        return mousePos
    }

    const { x, y } = useMousePos();

    useFrame((state, delta) => (
        mesh.current.rotation.x = x/1000,
        mesh.current.rotation.y = y/1000,
        mesh.current.rotation.z = x/1000
    ))

    const { geoX, geoY, geoZ } = useControls({ geoX: 1, geoY: 1, geoZ: 1 })

    return (
        <a.mesh 
        ref={mesh}
        scale={ sizeHover.scale }
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        >
            <boxGeometry args={[geoX, geoY, geoZ]} />
            <meshStandardMaterial color={color} />
        </a.mesh>
    )
}