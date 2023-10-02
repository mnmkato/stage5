import React from 'react';
import { Suspense } from 'react';
import { Canvas} from '@react-three/fiber';
import {  useGLTF} from '@react-three/drei'
import './App.css'

function Model(props) {
  const { nodes, materials } = useGLTF('/2b12NZh0CH30EQ5HjMDwTuDtuK2WIeonJSpJWc77wP1WrXJcX8RZOG.glb')
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.UnionAvatars_Body.geometry} material={materials.UnionAvatars_Body} skeleton={nodes.UnionAvatars_Body.skeleton} />
      <skinnedMesh geometry={nodes.UnionAvatars_Bottom.geometry} material={materials.UnionAvatars_Bottom} skeleton={nodes.UnionAvatars_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.UnionAvatars_Hair.geometry} material={materials['generated.png']} skeleton={nodes.UnionAvatars_Hair.skeleton} />
      <skinnedMesh geometry={nodes.UnionAvatars_Shoes.geometry} material={materials.UnionAvatars_Shoes} skeleton={nodes.UnionAvatars_Shoes.skeleton} />
      <skinnedMesh geometry={nodes.UnionAvatars_Top.geometry} material={materials.UnionAvatars_Top} skeleton={nodes.UnionAvatars_Top.skeleton} />
      <skinnedMesh geometry={nodes.Mesh.geometry} material={materials['model.jpg']} skeleton={nodes.Mesh.skeleton} />
      <skinnedMesh geometry={nodes.Mesh_1.geometry} material={materials.UnionAvatars_Neck} skeleton={nodes.Mesh_1.skeleton} />
    </group>
  )
}


function App() {
  return (
    <>
    <Canvas camera={{fov:70, position:[0,0,65]}}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model />
      </Suspense>      
    </Canvas>
    </>
  )
}

export default App
