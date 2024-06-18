

export const counter = (type: any, action: any) => {
    return {
        type: type,
        payload: action,
    }
}

export const randomNumbers = (type: any) => {
    return {
        type: type,
    }
}

export const changeReducer = (type: any) => {
    return {
        type: type
    }
}