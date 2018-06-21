import { 
    ADD_PRODUCT, 
    ADD_PRODUCT_DESCRIPTION
} from "./actions";

export const addProductAction = () => ({
    type: ADD_PRODUCT
});

export const addProductDescription = (payload)=>({
    type: ADD_PRODUCT_DESCRIPTION,
    payload
})
