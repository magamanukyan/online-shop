import { Close } from '@mui/icons-material'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Announce = () => {
    const [announceStyle, setAnnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')


    const handleClose = ()=>{
        setAnnounceStyle(announceStyle + " hidden")
    }
  return (
    <div className={announceStyle}>
       <Link to="/"><h2>Hurry up it's 40% for now. </h2> </Link> 
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce