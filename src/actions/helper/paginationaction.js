import { PAGINATE_PRODUCTS, PAGINATE_CART } from "../actionTypes"

export const paginate = (firstIndex, lastIndex, pageComponent) => (dispatch) => {
    switch (pageComponent) {
        case PAGINATE_PRODUCTS:
            dispatch({
                type: PAGINATE_PRODUCTS,
                payload: { firstIndex, lastIndex }
            })
            break;

        case PAGINATE_CART:
            dispatch({
                type: PAGINATE_CART,
                payload: { firstIndex, lastIndex }
            })
            break;

        default: return
    }
}