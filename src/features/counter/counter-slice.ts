// uses the DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    incremented(state) {
      // it is ok to add this because Immer makes it work under the hood
      state.value++;
    },
    // amountAdded
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    }
    // decrement
    // reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
