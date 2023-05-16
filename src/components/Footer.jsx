import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'

  return (
    <div className='flex items-center justify-around p-2 pl-20 mobile:flex-col tablet:flex-col tablet:items-start mobile:items-start mobile:pl-0'>
        <div className='flex-1 flex flex-col flex-wrap p-2'>
            {/* Store information */}
            <h1 className='text-[25px]'>Fashion Frenzy</h1>
            <p>Fashion Frenzy is your one-stop-shop for all your fashion needs. We offer a wide range of trendy and stylish clothing and accessories for men, women, and children. Our mission is to provide our customers with high-quality products at affordable prices.</p>
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className={socialStyle+ ' bg-blue-700'}>
                    <Facebook/>
                </div>
                <div className={socialStyle + ' bg-orange-500'}>
                    <Instagram/>
                </div>
                <div className={socialStyle+ ' bg-sky-400'}>
                    <Twitter/>
                </div>
                <div className={socialStyle+ ' bg-red-600'}>
                    <Pinterest/>
                </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col p-2 pl-[200px] tablet:pl-0 mobile:pl-0'>
            {/* Contact information */}
             <div className='flex m-3 '>
               <div className='cursor-pointer w-[30px] bg-slate-700 text-white'><LocationOnOutlined/> </div> 
                <a className='pl-3' href='https://goo.gl/maps/zu7RLmor6Q2X1heNA'>8 Abovyan St. Yerevan, 0010</a>
             </div>
             <div className='flex m-3 '>
               <div className='cursor-pointer w-[30px] bg-slate-700 text-white'> <LocalPhoneOutlined/> </div>
                <a className='pl-3' href="tel:+37494949494">+374 94 949494</a>
             </div>
             <div className='flex m-3'>
               <div className='cursor-pointer w-[30px] bg-slate-700 text-white'><EmailOutlined/> </div> 
                <a className='pl-3' href="mailto:frenzy@outlook.com">frenzy@outlook.com</a>
             </div>
        </div>
    </div>
  )
}

export default Footer