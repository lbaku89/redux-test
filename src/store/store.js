import { configureStore } from "@reduxjs/toolkit";
import fetchStylePropertySlice from "../reducer/reducer";

const store = configureStore({
	reducer: {
		fetchStyleProperty: fetchStylePropertySlice.reducer,
	},
});

export default store;
