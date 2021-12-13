import { PAGINATE_PRODUCTS, PAGINATE_CART } from "../actionTypes"

export const paginate = (firstIndex, lastIndex, pageComponent) => (dispatch) => {
    console.log('PAGINATE')
    switch (pageComponent) {
        case PAGINATE_PRODUCTS:
            console.log('PAGINATE-PRODUCT' + firstIndex + lastIndex )
            dispatch({
                type: PAGINATE_PRODUCTS,
                payload: { firstIndex, lastIndex }
            })
            break;

        case PAGINATE_CART:
            console.log('PAGINATE-CAAAART' + firstIndex + lastIndex )
            dispatch({
                type: PAGINATE_CART,
                payload: { firstIndex, lastIndex }
            })
            break;

        default: return
    }
}