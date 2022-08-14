import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({

  name: "test",
  initialState: {
    dataTests: [],
    categoryTest: null,
    amountTest: 10,
    answers: [],
    dataIndex: 0
   },
  reducers: {

    addDataTests: (state, action ) => {
        state.dataTests=(action.payload.data.results)
    },

    editAmountValue: ( state, action ) => {
        state.amountTest = action.payload
    },
    editCategoryValue: ( state, action ) => {
        state.categoryTest = action.payload
    },
    answersPush: (state, action ) => {
      state.answers[state.dataIndex]=action.payload
    },
    editDataIndex: (state, action ) => {
      state.dataIndex=action.payload
    },
    incrementAmount: (state, action) => {
      state.amountTest += 1  
    },
    decrementAmount: (state, action) => {
      state.amountTest -= 1  
    }
  }
});

export const {
    editAmountValue,
    editCategoryValue,
    addDataTests,
    answersPush,
    editDataIndex,
    incrementAmount,
    decrementAmount
} = testSlice.actions;

export default testSlice.reducer;
