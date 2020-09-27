
const initialState = {
    lang: 'fr',
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case "AR": {
            newState.lang = 'ar'
            return newState
        }
        case 'FR': {
            newState.lang = 'fr'
            return newState
        }
        default: {
            return newState
        }
    }
}

export default reducer
