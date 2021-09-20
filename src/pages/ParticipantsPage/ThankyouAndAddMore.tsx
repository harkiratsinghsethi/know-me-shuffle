import {DefaultButton} from '@fluentui/react';
import constants  from "../../utils/CONSTANTS";

export const ThankYouAndAddMore = () => {
    return (
        <div>
            <div>Thank you</div>
            <div><DefaultButton text={constants.ADD_MORE} onClick={doneCLickHandler}/></div>
        </div>
    )

    function doneCLickHandler(){

    }
}