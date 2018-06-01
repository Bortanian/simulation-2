let initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    image: '',
    mortgage: 0,
    rent: 0
}

const UPDATE_ONE = "UPDATE_ONE"
const UPDATE_TWO = "UPDATE_TWO"
const UPDATE_THREE = "UPDATE_THREE"
const CLEAR_FIELDS = "CLEAR_FIELDS"

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ONE:
            return Object.assign({}, state, {
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip
            })
        case UPDATE_TWO:
            return Object.assign({}, state, {image: action.payload})
        case UPDATE_THREE:
            return Object.assign({}, state, {
                mortgage: action.payload.mortgage,
                rent: action.payload.rent
            })
        case CLEAR_FIELDS:
            return Object.assign({}, state, {
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip,
                image: action.payload.image,
                mortgage: action.payload.mortgage,
                rent: action.payload.rent
            })
        default:
            return state;
    }

}
export function updateStepOne(name, address, city, state, zip) {
    return {
        type: UPDATE_ONE,
        payload: {
            name,
            address,
            city,
            state,
            zip
        }
    }
}
export function updateStepTwo(image) {
    return{
        type: UPDATE_TWO,
        payload: image
    }
}
export function updateStepThree(mortgage, rent){
    return{
        type: UPDATE_THREE,
        payload:{
            mortgage,
            rent
        }
    }
}
export function clearFields(){
    return{
        type: CLEAR_FIELDS,
        payload: initialState
    }
}