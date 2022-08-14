import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({

  name: "test",
  initialState: {
    dataTests: [],
    categoryTest: '',
    amountTest: 10,
    answers: [],
    dataIndex: 0
   },
  reducers: {

    addDataTests: (state, action ) => {
        state.dataTests=(action.payload.data.results)
        console.log(state.dataTests.length);
    },

    editAmountValue: ( state, action ) => {
        state.amountTest = action.payload
    },
    editCategoryValue: ( state, action ) => {
        state.categoryTest = action.payload
    },
    answersPush: (state, action ) => {
      state.answers[state.dataIndex]=action.payload
      console.log(state.answers);

      
    },
    editDataIndex: (state, action ) => {
      state.dataIndex=action.payload
    }
  }
});

export const {
    editAmountValue,
    editCategoryValue,
    addDataTests,
    answersPush,
    editDataIndex
} = testSlice.actions;

export default testSlice.reducer;
