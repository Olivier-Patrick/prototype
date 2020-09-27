
const initialState = {
    admin: {
        status: false,
        data: null,
    },
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case "AdminOFF": {
            newState.admin = action.value
            return newState
        }
        case 'AdminON': {
            newState.admin = action.value
            return newState
        }
        default: {
            return newState
        }
    }
}

export default reducer
