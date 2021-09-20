import {useEffect, useState} from 'react'
import './styles.css'
import testData from '../../utils/TestData'
import {DefaultButton} from '@fluentui/react';
import constants from '../../utils/CONSTANTS';
import Participants from '../ParticipantsPage/AddFact'
import FindEmployee from './Test';
const HomePage = () => {
    let count = 0
    let [data, setData] = useState(testData)
    let [question, setQuestion] = useState('')
    let [isDisabled, setDisabled] = useState(false)
    let [isStarted, setIsStarted] = useState(false)
    const getRandomNumberWithNoDelay = () => Math.floor(Math.random() * (testData.length - 1 - 0 + 1)) + 0;

    const shuffleAndSetQuestion = () => {
        let randomNumber = getRandomNumberWithNoDelay()
        console.log(randomNumber)
        setQuestion(Object.entries(data[randomNumber])[0][1])
        count++
    }

    let runInterval = () => {

        return new Promise(resolve => {
            const interval = setInterval(() => {
                console.log('count', count)
                setDisabled(true)
                shuffleAndSetQuestion()
                if (count === 20) {
                    setDisabled(false)
                    clearInterval(interval)
                }
            }, 50)

        })
    }

    const getRandomQuestion = () => {
        runInterval()
        // console.log(randomNum, data[randomNum])
        // setQuestion(JSON.stringify(data[randomNum]))
    }
    useEffect(() => getRandomQuestion(), [])

    const startShuffle = () => {
        setIsStarted(true)
        getRandomQuestion()
    }

    return (<div className='playgroundContainer'>
        {isStarted
            ? <div>
                <div>
                    {question}
                </div>
                <DefaultButton disabled={isDisabled} onClick={() => getRandomQuestion()} text={constants.SHUFFLE_TEXT}/>
                <DefaultButton text={constants.REVEAL_TEXT}/>
            </div>
            : <div>
                <DefaultButton onClick={() => startShuffle()} text={constants.LETS_PLAY_TEXT}/>
            </div>}

    {<FindEmployee/>}
    </div>)
}

export default HomePage
