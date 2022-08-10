import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkFetchStyleProperty } from "../reducer/reducer";

export default function Component() {
	const dispatch = useDispatch();
	const data = useSelector((state) => {
		return state.fetchStyleProperty.userInfo.id;
	});
	const status = useSelector((state) => {
		return state.fetchStyleProperty.status;
	});

	useEffect(() => {
		dispatch(thunkFetchStyleProperty());
	}, [dispatch]);
	return (
		<>
			<p>id : {data}</p>
			<p>status : {status}</p>
		</>
	);
}
