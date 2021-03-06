import {useState} from 'react'
import './styles.less'
import {DefaultButton} from '@fluentui/react';
import {AddPersonalDetails} from './AddPersonalDetails'
import {ThankYouAndAddMore} from "./ThankyouAndAddMore.tsx";
import constants from "../../utils/CONSTANTS";

const Participants = () => {
    const [isNameAdded, setIsNameAdded] = useState(false)
    const [isFactAdded, setIsFactAdded] = useState(false)

    return (
        <div className='participantContainer'>
            {!isFactAdded ?
                (!isNameAdded ? <AddPersonalDetails setIsNameAdded={setIsNameAdded}/> :
                        <div className='factForm'><h1>Enter an unknown fact about you!</h1>
                            <input type='text' id='question' className="questionsInput"/>
                            <div className='btnContainer'>
                                <DefaultButton className='addQuestionBtn' text={constants.ADD_FACT_TEXT}/>
                                <DefaultButton type="submit" value="Submit" onClick={doneCLickHandler}
                                               text={constants.DONE_TEXT}/>
                            </div>
                        </div>

                ) : <ThankYouAndAddMore/>
            }
        </div>
    )

    function doneCLickHandler() {
        setIsFactAdded(true)
    }
}
export default Participants
