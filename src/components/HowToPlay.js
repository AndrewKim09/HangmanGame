import React from 'react'

export const HowToPlay = (props) => {
  return (
    <div className='flex sm:flex-col gap-[2px] justify-between w-[85%] h-[90%]'>
        <div className='flex items-center sm:justify-between'>
            <button className=" bg-gradient-to-b from-[#FE71FE] to-[#7199FF] rounded-full aspect-square sm:h-[40px] md:h-[64px] lg:h-[94px] flex justify-center items-center" onClick={() => {props.setPage('')}}>
                <div className='backLogo sm:w-[17.45px] sm:h-[16.17px] md:w-[25.87px] md:h-[27.91px] lg:w-[38px] lg:h-[41px]'/>
            </button>
            <span className='gradientText sm:text-md md:text-[89px] lg:text-xl'>How to Play</span>
            <div className='hidden md:block'></div>
        </div>

        <div className='grid gap-4 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 sm:h-[80%] lg:py-12'>

            <div className=' grid justify-between py-7 bg-white px-10 rounded-3xl sm:grid-cols-[1fr_17fr] sm:grid-rows-[1fr_2fr] lg:grid-rows-[1fr_1fr_9fr] lg:grid-cols-1 lg:py-[60px] lg:gap-10'>
                <span className=' sm:text-[24px] md:text-lg text-blue md:align-middle sm:row-start-1 sm:grid-row md:row-span-2 lg:row-span-1 sm:mr-6 lg:mr-0 lg:text-center '>01</span>
                <span className='sm:text-[24px] sm:row-start-1 text-darkNavy md:row-span-1 lg:text-[23px] xl:text-md lg:text-center'>CHOOSE A CATEGORY</span>
                <p className='text-[16px] text-[#887DC0] sm:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-1 md:text-[20px] lg:text-center lg:text-[22px] xl:text-body'>
                    First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.
                </p>
            </div>

            <div className=' grid justify-between py-7 bg-white px-10 rounded-3xl sm:grid-cols-[1fr_17fr] sm:grid-rows-[1fr_2fr] lg:grid-rows-[1fr_1fr_9fr] lg:grid-cols-1 lg:py-[60px] lg:gap-10'>
                <span className=' sm:text-[24px] md:text-lg text-blue md:align-middle sm:row-start-1 sm:grid-row md:row-span-2 lg:row-span-1 sm:mr-6 lg:mr-0 lg:text-center '>02</span>
                <span className='sm:text-[24px] sm:row-start-1 text-darkNavy md:row-span-1 lg:text-sm xl:text-md lg:text-center'>GUESS LETTERS</span>
                <p className='text-[16px] text-[#887DC0] sm:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-1 md:text-[20px] lg:text-center lg:text-[22px] xl:text-body'>
                Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.
                </p>
            </div>

            <div className=' grid justify-between py-7 bg-white px-10 rounded-3xl sm:grid-cols-[1fr_17fr] sm:grid-rows-[1fr_2fr] lg:grid-rows-[1fr_1fr_9fr] lg:grid-cols-1 lg:py-[60px] lg:gap-10'>
                <span className=' sm:text-[24px] md:text-lg text-blue md:align-middle sm:row-start-1 sm:grid-row md:row-span-2 lg:row-span-1 sm:mr-6 lg:mr-0 lg:text-center '>03</span>
                <span className='sm:text-[24px] sm:row-start-1 text-darkNavy md:row-span-1 lg:text-sm xl:text-md lg:text-center'>WIN OR LOSE</span>
                <p className='text-[16px] text-[#887DC0] sm:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-1 md:text-[20px] lg:text-center lg:text-[22px] xl:text-body'>
                You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.
                </p>
            </div>
        </div>
    </div>
  )
}
