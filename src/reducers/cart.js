import * as actionsTypes from './../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : []
var cart = (state = initialState, action) => {
    let index = 0;
    switch (action.type) {
        case actionsTypes.ADD_CART:
            let { product, result, quantity } = action;
            
            if (result > 0) {
                index = findProductInCart(product, state);
                if (index !== -1) {
                    state[index].quantity++
                } else {
                    state.push({
                        product,
                        quantity,
                    })
                }
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case actionsTypes.DELETE_PRODUCT_IN_CART:
            index = action.indexDelete;
            state.splice(index, 1)
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case actionsTypes.UPDATE_PRODUCT_IN_CART:
            let { requestUpdate } = action;
            index = action.indexUpdate
            let quantityUpdate = state[index].quantity
            if (requestUpdate && state[index].quantity < state[index].product.inventory) {
                state[index].quantity++
            } else if (!requestUpdate && quantityUpdate > 1) {
                state[index].quantity--
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}
var findProductInCart = (product, state) => {
    let index = -1;
    if (state.length > 0) {
        for (let i = 0; i < state.length; i++) {
            if (product.id === state[i].product.id) {
                index = i; break;
            }
        }
    }
    return index
}
export default cart