import React, {useContext} from 'react'
import { data1 } from '../App'


const ButtonContext = () => {
    
        const User = useContext(data1)
        // const Channel = useContext(data2)

        return (
            <div style={{color:'red', fontSize:30}}>
                
               {User}
                <div className='mb-2 mt-2'>
                    
                    
                </div>
            </div>
        )
    }

    export default ButtonContext
