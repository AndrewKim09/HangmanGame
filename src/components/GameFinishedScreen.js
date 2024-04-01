import React from 'react'

export const GameFinishedScreen = (props) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center'>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#190131] to-[#282B96] opacity-[75%]'></div>
        <div className='sm:h-[445px] max-w-[100%] sm:w-[324px] md:h-[445px] md:w-[592px] relative  rounded-[10%] flex flex-col items-center startMenuContainer justify-center pb-[50px]'>
            <div className='flex flex-col absolute top-0 justify-center items-center sm:text-[94px] md:text-[134px] md:mt-[-130px] sm:mt-[-90px] z-10 gradientText'>{props.state}</div>

            <div className='flex flex-col items-center sm:gap-y-[55px] w-[100%] absolute sm:bottom-[87px]'>
                <button className='text-white rounded-[1000px] tracking-wider sm:h-[47px] sm:w-[226px] sm:text-sm categoryButton' onClick={() => {props.newGame()}}>PLAY AGAIN</button>
                <button className='text-white rounded-[1000px] tracking-wider sm:h-[47px] sm:w-[275px] sm:text-sm categoryButton' onClick={() => {props.setPage('CategoryPicker')}}>NEW CATEGORY</button>
                <button className='text-white rounded-[1000px] tracking-wider sm:h-[47px] sm:w-[235px] sm:text-sm quitButton' onClick={() => {props.setPage('')}}>QUIT GAME</button>
            </div>
            
        </div>
    
    </div>
  )
}
