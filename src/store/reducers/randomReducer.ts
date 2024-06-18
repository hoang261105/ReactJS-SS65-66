const arrRandom: number[] = []

const randomReducer = (state = arrRandom, action: any) => {
    switch (action.type) {
        case "ADD":
            const randomNumber = Math.floor(Math.random() * 100)
            return [...state, randomNumber]
    
        default:
            return state
    }
}

export default randomReducer