import { useEffect, useState } from "react";
import { DefaultButton } from '@fluentui/react';
import HomePage from "../Playground/Playground";
import constants from '../../utils/CONSTANTS'
import './styles.less'
import { useHistory } from "react-router-dom";

let CreateRoom = () => {
    const history = useHistory();

    let doneCLickHandler = () => {
        console.log('clicked')
        history.push('/playground')
    }
    return (<div className='createRoomContainer'>

        <div className='formContainerCreateRoom'>
            <h2> Create Room !</h2>
            <input type='text' placeholder={constants.NAME_WITH_QUESTION_MARK} className='createRoomNameInput' />
            <DefaultButton className='createRoomBtn' onClick={doneCLickHandler}
                text={constants.DONE_TEXT} />
            <hr className='line'/>
            <h2> Enter Room Number To Play !</h2>
                
            <input type='text' placeholder={constants.ROOM_NUMBER} className='createRoomNameInput' />
            <DefaultButton className='createRoomBtn' onClick={doneCLickHandler}
                text={constants.ENTER} />
        </div>
    </div>)
}

export default CreateRoom