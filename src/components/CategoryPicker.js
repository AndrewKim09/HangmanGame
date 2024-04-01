import React from 'react'

export const CategoryPicker = (props) => {
    const onCategoryClick = (category) => {
        props.setCategory(category);
        props.setPage('Game');
    }
  return (
    <div className='flex flex-col w-[85%] h-[90%] justify-between'>
        <div className='flex items-center sm:justify-between'>
            <button className=" bg-gradient-to-b from-[#FE71FE] to-[#7199FF] rounded-full aspect-square sm:h-[40px] md:h-[64px] lg:h-[94px] flex justify-center items-center" onClick={() => {props.setPage('')}}>
                <div className='backLogo sm:w-[17.45px] sm:h-[16.17px] md:w-[25.87px] md:h-[27.91px] lg:w-[38px] lg:h-[41px]'/>
            </button>
            <span className='gradientText sm:text-md md:text-[65px] lg:text-lg xl:text-xl'>Pick a Category</span>
            <div className='hidden md:block'></div>
        </div>

        <div className='grid sm:gap-10 sm:grid-rows-6 sm:grid-cols-1 md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-20 lg:gap-x-14 h-[90%] sm:py-16 lg:py-28'>
            <div className='categoryButton sm:text-[24px] md:text-md tracking-wider' >
                <div className='categoryButtonText' onClick={() => {onCategoryClick('Movies')}}>MOVIES</div>
            </div>
            
            <div className='categoryButton sm:text-[24px] md:text-md tracking-wider'>
                <div className='categoryButtonText' onClick={() => {onCategoryClick('Shows')}}>TV SHOWS</div>
            </div>

            <div className='categoryButton sm:text-[24px] md:text-md tracking-wider'>
                <div className='categoryButtonText' onClick={() => {onCategoryClick('Countries')}}>COUNTRIES</div>
            </div>

            <div className='categoryButton sm:text-[24px] md:text-[33px] lg:text-md tracking-wider'>
                <div className='categoryButtonText' onClick={() => {onCategoryClick('Capitals')}}>CAPITAL CITIES</div>
            </div>

            <div className='categoryButton sm:text-[24px] md:text-md tracking-wider'>
                <div className='categoryButtonText' onClick={() => {onCategoryClick('Animals')}}>ANIMALS</div>
            </div>

            <div className='categoryButton sm:text-[24px] md:text-md tracking-wider'>
                <div className='categoryButtonText' onClick={() => {onCategoryClick('Sports')}}>SPORTS</div>
            </div>
        </div>

    </div>
  )
}
