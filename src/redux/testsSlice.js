import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({

  name: "test",
  initialState: {
    dataTests: [],
    categoryTest: '',
    amountTest: 10
   },
  reducers: {

    addDataTests: (state, action ) => {
        state.dataTests=action.payload
    },

    editAmountValue: ( state, action ) => {
        state.amountTest = action.payload
    },
    editCategoryValue: ( state, action ) => {
        state.categoryTest = action.payload
    }

    // deleteMijoz: (state, action ) => {
    //   const idxTask = state.afitsantName[state.index].mijozlar.findIndex(
    //     (task) => task.orni === action.payload
    //   )

    //   const idxTask2 = state.afitsantName[state.index].mijozlar[state.indexMijoz].buyurtma.findIndex(
    //     (e) => e.id === action.payload
    //   ) 
    //   state.afitsantName[state.index].mijozlar.splice(idxTask, 1)
    //   console.log(state.index, idxTask, idxTask2);
    //  },

  }
});

export const {
    editAmountValue,
    editCategoryValue
} = testSlice.actions;

export default testSlice.reducer;
