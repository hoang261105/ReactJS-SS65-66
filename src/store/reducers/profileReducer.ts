const profile = [
    {
        id: 1,
        name: "Nguyễn Văn Nam",
        gender: "Nam",
        address: "Thanh Xuân, Hà Nội",
        birthday: "20/11/2003"
    },
    {
        id: 2,
        name: "Nguyễn Thị B",
        gender: "Nữ",
        address: "Cầu Giấy, Hà Nội",
        birthday: "12/02/2005"
    }
]

const reducerProfile = (state = profile, action: any) => {
    switch (action.type) {
        case "READ":
            return state
    
        default:
            return state
    }
}

export default reducerProfile