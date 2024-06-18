import { act } from "react";

const initialCount: number = 0;

const countReducer = (state = initialCount, action: any) => {
    switch (action.type) {
        case "INCREASE":
            return state + action.payload
        case "DECREASE":
            return state - action.payload
        default:
            return state
    }
}

export default countReducer