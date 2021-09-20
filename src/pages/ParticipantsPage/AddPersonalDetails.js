import { DefaultButton } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import './styles.less'
import constants  from "../../utils/CONSTANTS";
export const AddPersonalDetails =({setIsNameAdded}) =>{
    const clickHandler =() =>{
        setIsNameAdded(true)

    }

    return(
        <div className='addPersonalDetailsContainer'>
            <TextField placeholder={constants.NAME_WITH_QUESTION_MARK} required />
            <DefaultButton text={constants.DONE_TEXT} onClick={()=>clickHandler()}/>
        </div>
    )
}
