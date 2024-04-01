import React, { useEffect, useState } from 'react'
import data from '../data.json';
import { PopUpScreen } from './PopUpScreen';
import { GameFinishedScreen } from './GameFinishedScreen';

export const Game = (props) => {
		const [health, setHealth] = useState(100)
		const [words, setWord] = useState('');
		const [paused, setPaused] = useState(false)
		const [win, setWin] = useState(false)
		const [lose, setLose] = useState(false)
		const [correctGuesses, setCorrectGuesses] = useState(0)
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

		const newGame = () => {
			var randomWord = data['categories'][props.category][Math.floor(Math.random() * data['categories'][props.category].length)];
			randomWord = randomWord.name.split(' ')
			randomWord = randomWord.map(word => word.split(''))
			randomWord = randomWord.map(word => word.map(letter => letter.toUpperCase()))
			setWord(randomWord)
		}
		
		useEffect(() => {
			newGame()
		}, []);

		const playAgain = () => {
			newGame()
			setWin(false)
			setLose(false)
			setHealth(100)
			setCorrectGuesses(0)

			Array.from(document.getElementById('FillInTheBlankContainer').children).forEach((row) => {
				Array.from(row.children).forEach((letterButton) => {
					letterButton.children[0].innerHTML = ''
					letterButton.classList.remove('opacity-50')
				})
			})

			Array.from(document.getElementById('letters').children).forEach((letterButton) => {
				letterButton.classList.remove('opacity-50')
			})


		}

		const loseHealth = () => {
			setHealth(health - 12.5)
		}

		const onGuess = (e) => {
			if(e.currentTarget.classList.contains('opacity-50')) return;
			var currentCorrect = 0;
			const letter = e.currentTarget.getAttribute('value');
			const FillInTheBlankRows = document.getElementById('FillInTheBlankContainer').children;
			var correctCheck = false;
			Array.from(FillInTheBlankRows).forEach((row) => {
				const letters = row.children;
				Array.from(letters).forEach((letterButton) => {
					if (letterButton.getAttribute('value') === letter) {
						letterButton.children[0].innerHTML = letter;
						letterButton.classList.toggle('opacity-50')
						currentCorrect++
					}})
				})

			if (!correctCheck) {
				loseHealth()
			}
			setCorrectGuesses(correctGuesses + currentCorrect)
			e.currentTarget.classList.add('opacity-50')
			if(correctGuesses + currentCorrect === words.flat().length) {
				console.log('You win!')
				setWin(true)
			}
			else if(health === 0) {
				console.log('You lose!')
				setLose(true)
			}
		}
		
  return (
    <div className='flex flex-col h-[90%] sm:pb-[100px] md:pb-0 md:h-[95%] sm:w-[100%] lg:pb-[50px] justify-between'>
        {paused? <PopUpScreen state={'Paused'} setPage={props.setPage} setPaused={setPaused}/> : null}
		{win? <GameFinishedScreen state={'Win'} newGame={playAgain} setPage={props.setPage} setWin={setWin}/> : null}
		{lose? <GameFinishedScreen state={'Lose'} newGame={playAgain} setPage={props.setPage} setLose={setLose}/> : null}
		<div className='flex items-center sm:justify-between sm:px-[10%]'>
					
					<div className='flex items-center gap-4'>
            <button className=" bg-gradient-to-b from-[#FE71FE] to-[#7199FF] rounded-full aspect-square sm:h-[40px] md:h-[64px] lg:h-[94px] flex justify-center items-center" onClick={() => {setPaused(true)}}>
                <div className='menuLogo sm:w-[17.45px] sm:h-[16.17px] md:w-[25.87px] md:h-[27.91px] lg:w-[38px] lg:h-[41px]'/>
            </button>
            <span className='text-white sm:text-sm md:text-md lg:text-lg lg:ml-[57px]'>{props.category}</span>
					</div>

					<div className='flex h-[100%] w-[30%] items-center justify-end sm:gap-2'>
						<div className='flex justify-start items-center px-[4px] py-[3px] healthBarContainer sm:w-[50%] lg:w-[70%] bg-white rounded-[100px] sm:h-[16px]'>
							<div className={`healthBar rounded-[1000px] bg-darkNavy sm:h-[8px]`} style={{ width: `${health}%` }}/>
						</div>
						<div className="healthLogo sm:w-[26.16px] sm:h-[24px] lg:h-[53.33px] lg:w-[48.93px] lg:ml-[40px]" />
					</div>

        </div>

				<div id={"FillInTheBlankContainer"} className='flex flex-col gap-y-2 justify-center items-center h-[60%] overflow-auto'>
					{words ?
					
					words.map((word, index) => {
						return(
							<div className='flex sm:gap-x-4 md:gap-x-8' style={{marginTop: (index > 0) ? '16px' : '0px' }}>
								{word.map((letter, index) => {
									return (
										<div value={letter} key={index} className={`flex mx-auto items-center justify-center bg-white sm:rounded-lg text-darkNavy ${word.length > 7 ?`${word.length > 10 ? 'sm:w-[13px] md:w-[46px] lg:w-[75px]': 'sm:w-[15px] md:w-[60px] lg:w-[97px]'  }` : 'sm:w-[30px] md:w-[75px] lg:w-[97px]'} sm:h-[60px] md:h-[97px] lg:h-[100px] md:rounded-[25%] sm:text-[40px] md:text-[64px] letterButtonContainer opacity-50`} >
											<div className='letterButton'>
								
											</div>
										</div>
									)
								})}
							</div>
						)

					})
						

					:

					null
				
				}
				</div>

				<div id={'letters'} className='grid sm:grid-row-3 sm:grid-cols-9 sm:gap-x-2 md:gap-x-4 gap-y-4 h-[35%] sm:px-[10%]'>
					{alphabet.map((letter, index) => {
						return (
							<div value={letter} onClick={(e) => {onGuess(e)}} key={index} className='flex items-center justify-center sm:text-[24px] md:text-[40px] bg-white sm:rounded-[30%] md:rounded-[35%] lg:rounded-[30%] text-darkNavy cursor-pointer'>
								<div className='letterButton'>
									{letter}
								</div>
							</div>
						)
					})}
				</div>
    </div>
  )
}
