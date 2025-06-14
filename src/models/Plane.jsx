import {useEffect, useRef} from 'react'
import planeScene from '../assets/3d/plane.glb';
import {useGLTF,useAnimations} from '@react-three/drei'

export function Plane({isRotating, ...props}) {
    const ref = useRef();
    const {scene,animations} = useGLTF(planeScene);
    const {actions} = useAnimations(animations,ref);

    useEffect(() => {
        if(isRotating) {
            actions['Take 001'].play();
        }else{
            actions['Take 001'].stop();
        }
    },[isRotating])

  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}