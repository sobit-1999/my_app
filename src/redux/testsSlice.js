import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({

  name: "test",
  initialState: {
    dataTests: [],
    categoryTest: null,
    amountTest: 5,
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
    answersDelete: (state, action ) => {
      state.answers=[]
      state.amountTest=5
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
    editDataIndex,
    answersDelete

} = testSlice.actions;

export default testSlice.reducer;
