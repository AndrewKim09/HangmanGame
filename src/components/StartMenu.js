import React from 'react'

export const StartMenu = (props) => {
  return (
    <div className='sm:h-[531px] max-w-[100%] sm:w-[324px] md:h-[500px] relative md:w-[592px] rounded-[10%] sm:mt-[130px] md:mt-[200px] flex flex-col items-center startMenuContainer justify-between pb-[50px]'>
        <div className='flex flex-col justify-center items-center sm:h-[130px] w-[263px] md:h-[163.91px] md:w-[355.98px] md:mt-[-100px] sm:mt-[-75px] startMenu z-10'/>
        <div onClick={() => {props.setPage('CategoryPicker')}} className=' aspect-square sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] playButtonContainer relative bg-[#243041] rounded-full cursor-pointer'>
            <div className='bg-[#9D2DF5] rounded-full w-[95%] h-[95%] absolute left-[50%] translate-x-[-50%]'></div>
            <div className=' bg-gradient-to-b from-[#FF76FF] to-[#7199FF] h-[88%] w-[88%] rounded-full absolute left-[50%] translate-x-[-50%]'/>
            <div className='playButton sm:w-[53px] sm:h-[49.8px] md:w-[66.04px] md:h-[62.26px] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'/>
        </div>
        <button className='HowToPlayButton bg-blue rounded-[2000px] h-[62px] md:w-[260px] sm:w-[260px] text-sm text-white commonShadow' onClick={() => {props.setPage('HowToPlay')}}>How to Play</button>
    </div>
  )
}
