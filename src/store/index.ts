import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'

const Store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default Store
export type RootReducer = ReturnType<typeof Store.getState>
