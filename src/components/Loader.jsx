
import { Html } from "@react-three/drei"

export default function Loader() {
  return (
      <Html>
        <div className='flex items-center justify-center'>
          <div className='w-20 h-20 border-t-blue-500 rounded-full border-2 animate-spin'/>
        </div>
      </Html>
  )
}
