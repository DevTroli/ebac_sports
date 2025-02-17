import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const FavoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens.splice(state.itens.indexOf(produto), 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = FavoritosSlice.actions
export default FavoritosSlice.reducer
