import { ADD_PRODUCTS } from '../types'
// import productsJSON from '../../settings/products'
//const products = (state = productsJSON.products, action) => {
const products = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return action.value
    default:
      return state
  }
}

export default products
