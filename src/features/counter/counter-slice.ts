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
    // decrement
    // reset
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
