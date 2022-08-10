import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const thunkFetchStyleProperty = createAsyncThunk(
	"thunkFetchStyleProperty",
	async () => {
		const styleProperty = await axios
			.get("https://jsonplaceholder.typicode.com/users/2")
			.then((response) => {
				return response.data;
			})
			.catch((err) => {});

		return styleProperty;
	}
);

const fetchStylePropertySlice = createSlice({
	name: "fetchStylePropertySlice",
	initialState: {
		userInfo: {
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
			address: {
				street: "Kulas Light",
				suite: "Apt. 556",
				city: "Gwenborough",
				zipcode: "92998-3874",
				geo: {
					lat: "-37.3159",
					lng: "81.1496",
				},
			},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: {
				name: "Romaguera-Crona",
				catchPhrase: "Multi-layered client-server neural-net",
				bs: "harness real-time e-markets",
			},
		},
		status: "welcome",
	},
	reducer: {},
	extraReducers: (builder) => {
		builder.addCase(thunkFetchStyleProperty.pending, (state, action) => {
			state.status = "loading...";
		});
		builder.addCase(thunkFetchStyleProperty.fulfilled, (state, action) => {
			state.status = "success!";
			state.userInfo.id = action.payload.id;
		});
		builder.addCase(thunkFetchStyleProperty.rejected, (state, action) => {
			state.status = "fail";
		});
	},
});

export default fetchStylePropertySlice;
export { thunkFetchStyleProperty };
