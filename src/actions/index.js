import * as actionTypes from './../constants/ActionTypes'

export const onAddToCart = (product, result, quantity) => {
    return {
        type: actionTypes.ADD_CART,
        product,
        result,
        quantity
    }
}
export const actChangeMessage = (message) => {
    return {
        type: actionTypes.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProduct = (indexDelete) => {
    return {
        type: actionTypes.DELETE_PRODUCT_IN_CART,
        indexDelete
    }
}

export const actUpdateCart = (indexUpdate, requestUpdate) => {
    return {
        type: actionTypes.UPDATE_PRODUCT_IN_CART,
        indexUpdate,
        requestUpdate
    }
}

