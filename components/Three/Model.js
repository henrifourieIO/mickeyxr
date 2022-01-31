import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/vuzix-re2-hipoly.glb')
  // useFrame(() => {group.current.rotation.y += 0.005})
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glasses.geometry}
        material={materials.glass}
        position={[0, 0, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rubber.geometry}
        material={materials['plast mass rubber']}
        position={[0, 0, 0.02]}
      />
      <group position={[0, 0, 0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials['plast mass']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_1.geometry}
          material={materials['plast mass glossy']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_2.geometry}
          material={materials['camera lens']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_3.geometry}
          material={materials['camera eye']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/vuzix-re2-hipoly.glb')
