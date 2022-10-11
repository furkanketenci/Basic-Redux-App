// createSlice içinde barındırılan fonksiyonların tamamının yer aldığı kısımdır.
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })

// Action'lar state içerisinde bulunan fonksiyonlardır.
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
// Reducer store içindeki stateleri değiştirir. Store ise statelerin kaydedildiği büyük bir objedir.