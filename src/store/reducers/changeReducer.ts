const conmpany: string = "Rikkei Academy"

const changeReducer = (state = conmpany, action: any) => {
    switch (action.type) {
        case "CHANGE":
            return state = "RikkeiSoft"
    
        default:
            return state
    }
}

export default changeReducer