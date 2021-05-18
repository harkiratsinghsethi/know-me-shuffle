import {useEffect, useState} from 'react'
import './styles.css'
import testData from '../utils/TestData'
import Participants from './ParticipantsPage/AddFact'
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

    // let delay = (ms) => {
    //     return new Promise(resolve => {
    //         // console.log(resolve)
    //         setTimeout(() => {
    //             resolve()
    //             runInterval()
    //
    //
    //         }, ms)
    //     })
    //
    // }

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

    return (<div>
        {isStarted
            ? <div>
                <div>
                    {question}
                </div>
                <button disabled={isDisabled} onClick={() => getRandomQuestion()}>Shuffle</button>
            </div>
            : <div>
                <button onClick={() => startShuffle()}>Lets Play</button>
            </div>}


    </div>)
}

export default HomePage
