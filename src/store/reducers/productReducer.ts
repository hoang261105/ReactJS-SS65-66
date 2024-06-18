const product = [
    {
        id: 1, 
        productName: "Cá chép",
        price: 20000,
        quantity: 10
    },
    {
        id: 2,
        productName: "Quả táo",
        price: 10000,
        quantity: 30,
    }
]

const reducerProduct = (state = product, action: any) => {
    switch (action.type) {
        case "READ":
            return state
    
        default:
            return state
    }
}

export default reducerProduct
