const initialState = {};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            return {
                ...state,
                [action.item.id]: {
                    ...action.item,
                    quantity: 
                    state[action.item.id] && state[action.item.id].quantity
                        ? state[action.item.id].quantity + 1
                        : 1,
                }
            }
        }
        case 'REMOVE_ITEM': {
            const newCart = { ...state };
            delete newCart[action.itemId];
            return newCart;
        }
        case 'UPDATE_QUANTITY':{
            console.log(action,'action')
            return {
                ...state,
                [action.itemid]: {
                    ...state[action.itemId],
                    quantity: action.newQuantity
                }
            }
        }
        default:
            return state;
    }
}

export const getStoreItemArray = (state) => Object.values(state);