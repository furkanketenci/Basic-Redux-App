import { configureStore } from '@reduxjs/toolkit'

// Kullanmak istediğimiz fonksiyonları export ettiğimiz olayı import ettik.
import counterReducer from "./counterSlice"

export const store = configureStore({
  reducer: {
    counter:counterReducer 
    // counter ismine sahip içerisinde Reducer(statelerin) olduğu kısımlardır.
  },
})