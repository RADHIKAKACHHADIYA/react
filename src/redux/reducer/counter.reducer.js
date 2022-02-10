import * as ActionTypes from "../ActionTypes";

const initial = {
    counter: 0
}

const couterReducer = (state=initial , Action) => {
    switch (Action.type) {
        case ActionTypes.DECREMENT_COUNTER : 
            return {
                ...state,
                counter: state.counter-1
            }
        case ActionTypes.INCREMENT_COUNTER :
            return {
                ...state,
                counter:state.counter+1
            }
        default :
            return state;
    }
}

export default couterReducer;